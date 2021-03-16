import { TimeToLeave } from "@material-ui/icons";
import React, { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import "./Product.css";

export default function Product({ id, title, image, price, rating }) {
   //Use Product Context to get and update List of Products in ProductContext Data Layer to show the numer of items in the basket in Header.js
   const [products, setProducts] = useContext(ProductContext);

   const addToBasket = (e) => {
      e.preventDefault();

      setProducts([
         ...products,
         { id: id, title: title, price: price, rating: rating },
      ]);
   };

   return (
      <div className="product">
         <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
               <small>$</small>
               <strong>{price}</strong>
            </p>
            <div className="product_rating ">
               {Array(rating)
                  .fill()
                  .map((_, i) => (
                     <p>🌟</p>
                  ))}
            </div>
         </div>
         <img src={image} alt="" />
         <button onClick={addToBasket}>Add to Basket</button>
      </div>
   );
}
