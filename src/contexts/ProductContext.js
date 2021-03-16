import React, { useState, createContext } from "react";

//Create context(Data Layer); This context will be imported and used in the components that are wrapped up by the provider
export const ProductContext = createContext();

//Wrap up the provider to all components of our app that want access to the products list
export const ProductProvider = (props) => {
   const [products, setProducts] = useState([]);

   //Wrap up to all children components
   return (
      <ProductContext.Provider value={[products, setProducts]}>
         {props.children}
      </ProductContext.Provider>
   );
};
