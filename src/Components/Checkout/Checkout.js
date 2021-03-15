import "./Checkout.css";
import SubTotal from "./SubTotal/SubTotal";

const Checkout = () => {
   return (
      <div className="checkout">
         <div className="checkout_left">
            <img
               src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
               alt=""
               className="checkout_ad"
            />

            <div>
               <h2 className="checkout_title">Your shopping basket</h2>
               {/* BasketItem */}
               {/* BasketItem */}
               {/* BasketItem */}
               {/* BasketItem */}
               {/* BasketItem */}
               {/* BasketItem */}
               {/* BasketItem */}
               {/* BasketItem */}
               {/* BasketItem */}
               {/* BasketItem */}
            </div>
         </div>
         <div className="checkout_right">
            <SubTotal></SubTotal>
         </div>
      </div>
   );
};

export default Checkout;
