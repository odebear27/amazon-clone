import axios from "axios";

const instance = axios.create({
    // THE API (cloud function) URL
    baseURL: 'https://us-central1-clone-724c1.cloudfunctions.net/api' // From firebase functions
    // 'http://127.0.0.1:5001/clone-724c1/us-central1/api' 
});

export default instance;

