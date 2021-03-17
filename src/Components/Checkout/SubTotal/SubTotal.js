import React, { useContext } from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import {
   ProductBasketContext,
   getBasketTotalPrice,
} from "../../../contexts/ProductBasketContext";
import { useHistory } from "react-router-dom";

const SubTotal = () => {
   const [productBasket] = useContext(ProductBasketContext);

   //Get browser history
   const history = useHistory();

   const redirectToPaymentPage = (e) => {
      history.push("/payment");
   };

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
         <button onClick={redirectToPaymentPage}>Proceed to Checkout</button>
      </div>
   );
};

export default SubTotal;
