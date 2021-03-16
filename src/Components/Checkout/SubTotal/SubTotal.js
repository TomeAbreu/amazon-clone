import React, { useContext } from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import {
   ProductBasketContext,
   getBasketTotalPrice,
} from "../../../contexts/ProductBasketContext";

const SubTotal = () => {
   const [productBasket] = useContext(ProductBasketContext);

   return (
      <div className="subTotal">
         <CurrencyFormat
            renderText={(value) => (
               <>
                  <p>
                     Subtotal: ({productBasket.length} items):{" "}
                     <strong>{value}</strong>
                  </p>
                  <small className="subTotal_gift">
                     <input type="checkbox" /> This order contains a gift
                  </small>
               </>
            )}
            decimalScale={2}
            value={getBasketTotalPrice(productBasket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
         />
         <button>Proceed to Checkout</button>
      </div>
   );
};

export default SubTotal;
