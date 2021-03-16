import React from "react";
import Product from "../Product/Product";
import "./Home.css";

function Home() {
   return (
      <div className="home">
         <div className="home_container">
            <img
               className="home_image"
               src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
               alt=""
            ></img>
            <div className="home_row">
               <Product
                  key="123211341"
                  id="123211341"
                  title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
                  price={11.96}
                  image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg"
                  rating={5}
               />
               <Product
                  key="123211342"
                  id="123211342"
                  title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                  price={239.0}
                  rating={4}
                  image="https://m.media-amazon.com/images/I/61Tv-qj-VHL._AC_UL320_.jpg"
               />
            </div>
            <div className="home_row">
               <Product
                  key="123211343"
                  id="123211343"
                  title="Garmin Venu, GPS Smartwatch with Touchscreen Display, Light Gold and Navy Blue"
                  price={199.99}
                  rating={3}
                  image="https://m.media-amazon.com/images/I/71BZqWrIFoL._AC_UY218_.jpg"
               />
               <Product
                  key="123211344"
                  id="123211344"
                  title="Amazon Echo (3rd generation} | Smart speaker with Alexa, Charcoal Fabric"
                  price={98.99}
                  rating={5}
                  image="https:media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
               />
               <Product
                  key="123211345"
                  id="123211345"
                  title="New Apple iPad Pro (12.9-inch, Wi-fi, 218GB) - Silver (4th generation)"
                  price={598.0}
                  rating={4}
                  image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
               />
            </div>
            <div className="home_row">
               <Product
                  key="123211346"
                  id="123211346"
                  title="OnePlus Nord N10 5G Unlocked Smartphone, Midnight Ice​, 90Hz Refresh Rate, 6GB RAM + 128GB storage, US Version, Model BE2026"
                  price={296.99}
                  rating={4}
                  image="https://m.media-amazon.com/images/I/61-L1c9vvmL._AC_UY218_.jpg"
               />
            </div>
         </div>
      </div>
   );
}

export default Home;
