import "./Login.css";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../config/firebase";

const Login = () => {
   const history = useHistory(); //Change url programatically
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const emailOnChange = (e) => {
      setEmail(e.target.value);
   };
   const passwordOnChange = (e) => {
      setPassword(e.target.value);
   };

   const signIn = async (e) => {
      e.preventDefault();
      //Firebase Login
      try {
         const authFirebase = await auth.signInWithEmailAndPassword(
            email,
            password
         );
         history.push("/");
      } catch (error) {
         alert(error.message);
      }
   };

   const register = async (e) => {
      e.preventDefault();
      //Firebase Register
      try {
         const authFirebase = await auth.createUserWithEmailAndPassword(
            email,
            password
         );
         history.push("/");
      } catch (error) {
         alert(error.message);
      }
   };

   return (
      <div className="login">
         <Link to="/">
            <img
               className="login_logo"
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
               alt=""
            />
         </Link>

         <div className="login_container">
            <h1>Sign-in</h1>
            <form>
               <h5>E-mail</h5>
               <input type="text" value={email} onChange={emailOnChange} />
               <h5>Password</h5>
               <input
                  type="password"
                  value={password}
                  onChange={passwordOnChange}
               />
               <button
                  className="login_signInButton"
                  type="submit"
                  onClick={signIn}
               >
                  Sign In
               </button>
               <p>
                  By signing-in you agree to Amazon Clone Conditions of Use &
                  Sale. Please see our Privacy Notice, our Cookies Notice and
                  our interest-Based Ads Notice.
               </p>
               <button className="login_registerButton" onClick={register}>
                  Create your Amazon Account
               </button>
            </form>
         </div>
      </div>
   );
};

export default Login;
