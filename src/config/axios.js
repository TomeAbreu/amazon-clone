import axios from "axios";

const instance = axios.create({
   //THE API(cloud function firebase) URL
   baseURL: "http://localhost:5001/clone-fa0a1/us-central1/api",
});

export default instance;
