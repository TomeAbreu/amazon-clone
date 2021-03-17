import { useContext } from "react";
import "./Checkout.css";
import SubTotal from "./SubTotal/SubTotal";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import { ProductBasketContext } from "../../contexts/ProductBasketContext";
import { AuthContext } from "../../contexts/AuthContext";

const Checkout = () => {
   const [productBasket] = useContext(ProductBasketContext);
   const [user, setUser] = useContext(AuthContext);

   return (
      <div className="checkout">
         <div className="checkout_left">
            <img
               src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
               alt=""
               className="checkout_ad"
            />

            <div>
               <h3>Hello, {user?.email}</h3>
               <h2 className="checkout_title">Your shopping basket</h2>
               {productBasket.map((product, index) => (
                  <CheckoutProduct
                     key={index}
                     id={product.id}
                     image={product.image}
                     title={product.title}
                     price={product.price}
                     rating={product.ratinng}
                  />
               ))}
            </div>
         </div>
         <div className="checkout_right">
            <SubTotal></SubTotal>
         </div>
      </div>
   );
};

export default Checkout;
