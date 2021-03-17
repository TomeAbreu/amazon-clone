import "./Payment.css";

import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ProductBasketContext } from "../../contexts/ProductBasketContext";
import CheckoutProduct from "../Checkout/CheckoutProduct/CheckoutProduct";
import { ListItemAvatar } from "@material-ui/core";
import { Link } from "react-router-dom";

const Payment = () => {
   const [user, setUser] = useContext(AuthContext);
   const [products, setProducts] = useContext(ProductBasketContext);
   return (
      <div className="payment">
         <div className="payment-container">
            <h1>
               Checkout (<Link to="/checkout">{products?.length} items</Link>)
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
                  {products.map((product) => (
                     <CheckoutProduct
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
               </div>
            </div>
         </div>
      </div>
   );
};

export default Payment;
