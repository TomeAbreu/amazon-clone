import "./App.css";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
   return (
      <Router>
         <div className="app">
            <Switch>
               <Route path="/checkout">
                  {/* Header Component */}
                  <Header />
                  {/* Checkout Component */}
                  <h1>I AM CHECKOUT, SMASH THE LIKE BUTTON</h1>
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
