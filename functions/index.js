const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
   "sk_test_51IQaCdLskZRRz4XaxAAcN90uP3BkWSHhvV8arN7ET0zzK" +
      "aSzoRC0aZbnJxkNPKcLKWhxZTQOo0ENiEHYB7ieYUHy00ohniCKl7"
);

// Express APP structure

//  --App config
const app = express();

// ---Midlewares
app.use(cors({ origin: true }));
app.use(express.json());
// ---API Routes
app.get("/", (request, response) =>
   response.status(200).send("hello world from express API")
);

app.post("/payments/create", async (request, response) => {
   const total = request.query.total;

   //Call Stripe API
   try {
      const paymentIntent = await stripe.paymentIntents.create({
         amount: total,
         currency: "usd",
      });

      response.status(201).send({
         clientSecret: paymentIntent.client_secret,
      });
   } catch (error) {
      response.status(404).send({
         error: error.message,
      });
   }
});
// ---Listen Command
exports.api = functions.https.onRequest(app);
