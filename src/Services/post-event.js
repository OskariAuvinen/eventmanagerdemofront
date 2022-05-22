import axios from "axios";
const API_URL = "http://localhost:8080/events";
const postEvent = (event) => {
    return axios.post(API_URL, event);
};
export default postEvent;