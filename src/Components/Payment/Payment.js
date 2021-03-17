import "./Payment.css";

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import {
   ProductBasketContext,
   getBasketTotalPrice,
} from "../../contexts/ProductBasketContext";
import CheckoutProduct from "../Checkout/CheckoutProduct/CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "../../config/axios";
import { db } from "../../config/firebase";

const Payment = () => {
   //Get browser history
   const history = useHistory();

   //Get Contexts
   const [user, setUser] = useContext(AuthContext);
   const [productBasket, setProductBasket] = useContext(ProductBasketContext);

   //Stripe vars
   const stripe = useStripe();
   const elements = useElements();
   const [clientSecret, setClientSecret] = useState(true);

   //Validation Vars
   const [error, setError] = useState(null);
   const [disabled, setDisabled] = useState(true);
   const [succeeded, setSucceeded] = useState(false);
   const [processing, setProcessing] = useState("");

   useEffect(() => {
      //Generate stripe client secret everytime the basket changes or when the payment component loads

      const getClientSecret = async () => {
         try {
            console.log(getBasketTotalPrice(productBasket));
            const response = await axios({
               method: "post",
               //Stripe expects the total of subitems
               url: `/payments/create?total=${
                  getBasketTotalPrice(productBasket) * 100
               }`,
            });
            console.log(response);
            //Set Client Secret
            setClientSecret(response.data.clientSecret);
         } catch (error) {}
      };

      getClientSecret();
   }, [productBasket]);

   //Vars for form error and
   //Handle Stripe Payment
   const handlePayment = async (e) => {
      e.preventDefault();
      //Prevent to click Buy Now Button Again
      setProcessing(true);

      //Confirm Payment wit Stripe
      try {
         const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
               card: elements.getElement(CardElement),
            },
         });

         console.log(payload.paymentIntent);

         //Create a document inside orders collection of the user with id, basket, amount and created fields
         db.collection("users")
            .doc(user?.uid)
            .collection("orders")
            .doc(payload.paymentIntent.id)
            .set({
               basket: productBasket,
               amount: payload.paymentIntent.amount,
               created: payload.paymentIntent.created,
            });
         console.log(payload);
         setSucceeded(true);
         setError(null);

         //Empty the basket
         setProductBasket([]);

         //Replace User Page to Orders Page
         history.replace("/orders");
      } catch (error) {
         setError(error.message);
      }
      setProcessing(false);
   };

   //OnChage Event for Stripe Card Element; dipay any errors as agent fills card details
   const onCardChange = (e) => {
      setDisabled(e.empty);
      setError(e.error ? e.error.message : "");
   };

   return (
      <div className="payment">
         <div className="payment-container">
            <h1>
               Checkout (
               <Link to="/checkout">{productBasket?.length} items</Link>)
            </h1>
            {/*  Payment section - User Adress Info */}
            <div className="payment_section">
               <div className="payment_title">
                  <h3>Delivery Adress</h3>
               </div>
               <div className="payment_adress">
                  <p>{user?.email}</p>
                  <p>123 React Lane</p>
                  <p>Los Angeles, CA</p>
               </div>
            </div>
            {/*  Payment section - Review items */}
            <div className="payment_section">
               <div className="payment_title">
                  <h3>Review Items & Delivery</h3>
               </div>
               <div className="payment_items">
                  {/*Get Products from the basket */}
                  {productBasket.map((product, index) => (
                     <CheckoutProduct
                        key={index}
                        id={product.id}
                        title={product.title}
                        image={product.image}
                        price={product.price}
                        rating={product.rating}
                     />
                  ))}
               </div>
            </div>
            {/*  Payment section - Payment method */}
            <div className="payment_section">
               <div className="payment_title">
                  <h3>Payment Method</h3>
               </div>
               <div className="payment_details">
                  {/* Stripe payment process*/}
                  <form onSubmit={handlePayment}>
                     <CardElement onChange={onCardChange} />
                     <div className="payment_priceContainer">
                        <CurrencyFormat
                           renderText={(value) => (
                              <>
                                 <h3>Order Total: {value}</h3>
                              </>
                           )}
                           decimalScale={2}
                           value={getBasketTotalPrice(productBasket)}
                           displayType={"text"}
                           thousandSeparator={true}
                           prefix={"$"}
                        />

                        <button disabled={processing || disabled || succeeded}>
                           <span>
                              {processing ? <p>Processing</p> : "Buy Now"}
                           </span>
                        </button>
                     </div>
                     {/* Errors */}
                     {error && <div>{error}</div>}
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Payment;
