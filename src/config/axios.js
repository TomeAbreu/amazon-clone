import axios from "axios";

const instance = axios.create({
   //THE API(cloud function firebase) URL
   baseURL: "https://us-central1-clone-fa0a1.cloudfunctions.net/api",
});

export default instance;


//Dev URL of API
//http://localhost:5001/clone-fa0a1/us-central1/api