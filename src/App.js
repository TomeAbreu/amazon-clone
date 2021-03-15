import "./App.css";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";

function App() {
   return (
      <Router>
         <div className="app">
            {/* Header Component */}
            <Header />
            <Switch>
               <Route path="/checkout">
                  {/* Checkout Component */}
                  <Checkout />
               </Route>
               <Route path="/">
                  {/* Home Component */}
                  <Home />
               </Route>
            </Switch>
         </div>
      </Router>
   );
}

export default App;
