import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProductProvider } from "./contexts/ProductBasketContext";

ReactDOM.render(
   <React.StrictMode>
      {/* Wrap up product provider and gave access to all children components of the list of products*/}
      <ProductProvider>
         <App />
      </ProductProvider>
   </React.StrictMode>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
