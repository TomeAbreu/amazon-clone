import React, { useContext } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, useHistory } from "react-router-dom";
import { ProductBasketContext } from "../../contexts/ProductBasketContext";
import { AuthContext } from "../../contexts/AuthContext";
import { auth } from "../../config/firebase";

function Header() {
   //Pull the products list from ProductContext using the useContext
   const [productBasket] = useContext(ProductBasketContext);
   const history = useHistory();

   //Pull user from Auth Context
   const [user, setUser] = useContext(AuthContext);

   //Function to handle authentication in header
   const handleAuthentication = () => {
      if (user) {
         //sign out
         auth.signOut();
         //Redirect to login Page
         history.push("/login");
      }
   };
   return (
      <div className="header">
         <Link to="/">
            <img
               className="header_logo"
               src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
               alt=""
            ></img>
         </Link>

         <div className="header_search">
            <input className="header_searchInput" type="text" />
            <SearchIcon className="header_searchIcon" />
         </div>

         <div className="header_nav">
            <Link to={!user && "/login"}>
               {" "}
               <div className="header_option" onClick={handleAuthentication}>
                  <span className="header_optionLineOne">
                     Hello {user ? user.email : "Guest"}
                  </span>
                  <span className="header_optionLineTwo">
                     {user ? "Sign Out" : "Sign In"}
                  </span>
               </div>
            </Link>
            <Link to="/orders">
               <div className="header_option">
                  <span className="header_optionLineOne">Returns</span>
                  <span className="header_optionLineTwo">& Orders</span>
               </div>
            </Link>
            <div className="header_option">
               <span className="header_optionLineOne">Your</span>
               <span className="header_optionLineTwo">Prime</span>
            </div>
         </div>
         <Link to="/checkout">
            <div className="header_optionBasket">
               <ShoppingBasketIcon />
               <span className="header_optionLineTwo header_basketCount">
                  {productBasket.length}
               </span>
            </div>
         </Link>
      </div>
   );
}

export default Header;
