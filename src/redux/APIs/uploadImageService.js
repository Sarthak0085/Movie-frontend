import Axios from "./Axios";

export const uploadImageService = async (file, setLoading) => {
    try {
        setLoading(true);
        const { data } = await Axios.post("/upload", file);
        setLoading(false);
        return data;
    } catch (error) {
        setLoading(false);
        console.log(error);

    }
}