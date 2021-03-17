import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import Payment from "./Components/Payment/Payment";
import { useEffect, useContext } from "react";
import { auth } from "./config/firebase";
import { AuthContext } from "./contexts/AuthContext";

/*Stripe Element required import */
import { Elements } from "@stripe/react-stripe-js";
/*Import stripe library */
import { stripePromise } from "./config/stripe";

function App() {
   //Use Auth Context to get and update User Context prop to tell if User is login or not
   const [user, setUser] = useContext(AuthContext);

   //Will only run once when the app component loads or dependecy list changes
   useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
         console.log("THE USER IS ->", authUser);
         if (authUser) {
            //User is loggend in: put user in context Layer AuthContext to all children componenets as props
            setUser(authUser);
         } else {
            //User is not logged in
            setUser(null);
         }
      });
   }, []);
   return (
      <Router>
         <div className="app">
            <Switch>
               <Route path="/login">
                  {/* Login Component */}
                  <Login></Login>
               </Route>
               <Route path="/checkout">
                  {/* Header Component */}
                  <Header />
                  {/* Checkout Component */}
                  <Checkout />
               </Route>
               <Route path="/payment">
                  {/* Header Component */}
                  <Header />
                  {/* Payment Component */}
                  <Elements stripe={stripePromise}>
                     <Payment />
                  </Elements>
               </Route>
               <Route path="/">
                  {/* Header Component */}
                  <Header />
                  {/* Home Component */}
                  <Home />
               </Route>
            </Switch>
         </div>
      </Router>
   );
}

export default App;
