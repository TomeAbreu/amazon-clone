import "./Orders.css";

import React, { useEffect, useContext, useState } from "react";
import { db } from "../../config/firebase";
import { AuthContext } from "../../contexts/AuthContext";
import { ProductBasketContext } from "../../contexts/ProductBasketContext";
import Order from "./Order/Order";

const Orders = () => {
   //Var for orders
   const [orders, setOrders] = useState([]);

   //Load context vars
   const [user, setUser] = useContext(AuthContext);
   const [productBasket, setProductBasket] = useContext(ProductBasketContext);

   useEffect(() => {
      //If the user exists Pull the orders from the db
      if (user) {
         db.collection("users")
            .doc(user?.uid)
            .collection("orders")
            .orderBy("created", "desc")
            .onSnapshot((snapshot) =>
               setOrders(
                  snapshot.docs.map((doc) => ({
                     id: doc.id,
                     data: doc.data(),
                  }))
               )
            );
      } else {
         setOrders([]);
      }
   }, [user]);
   return (
      <div className="orders">
         <h1>Your orders</h1>
         <div className="orders_order">
            {orders.map((order, index) => (
               <Order key={index} order={order} />
            ))}
         </div>
      </div>
   );
};

export default Orders;
