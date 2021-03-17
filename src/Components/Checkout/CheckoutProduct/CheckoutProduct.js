import { useContext } from "react";
import { ProductBasketContext } from "../../../contexts/ProductBasketContext";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
   const [productBasket, setProductBasket] = useContext(ProductBasketContext);

   const removeProductFromBasket = () => {
      const index = productBasket.findIndex((product) => product.id === id);
      if (index > -1) {
         let newBasket = [...productBasket];
         newBasket.splice(index, 1);
         setProductBasket(newBasket);
      } else {
         console.warn(`Cant remove product with id: ${id} from basket`);
      }
   };

   return (
      <div className="checkoutProduct">
         <img className="checkoutProduct_image" src={image} alt="" />
         <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">{title}</p>
            <p className="checkoutProduct_price">
               <small>$</small>
               <strong>{price}</strong>
            </p>
            <div className="checkoutProduct_rating">
               {Array(rating)
                  .fill()
                  .map((_, i) => (
                     <p>🌟</p>
                  ))}
            </div>
            {!hideButton && (
               <button onClick={removeProductFromBasket}>
                  Remove from Basket
               </button>
            )}
         </div>
      </div>
   );
};

export default CheckoutProduct;
