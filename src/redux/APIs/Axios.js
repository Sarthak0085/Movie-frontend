import axios from "axios";

const Axios = axios.create({
    baseURL: "https://movie-server-hheg.onrender.com/api/v1"
});

export default Axios;