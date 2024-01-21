import axios from "axios";

const Axios = axios.create({
    baseURL: "https://movie-backend-z5dl.onrender.com/api/v1"
});

export default Axios;