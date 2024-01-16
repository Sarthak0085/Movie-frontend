import { useSelector } from "react-redux"
import { toast } from "react-toastify";
import { likeMovieAction } from "../redux/actions/userAction";
import Axios from "../redux/APIs/Axios";

export const IfMovieLiked = (movie) => {
    const { likedMovies } = useSelector((state) => state.getUserAllFavouritesMovie);
    return !!likedMovies?.find((likedMovie) => likedMovie?._id === movie?._id);
}

export const likeMovie = (dispatch, movie, userInfo) => {
    return !userInfo ?
        toast.error("Please login to add to favourite")
        : dispatch(likeMovieAction(movie?._id));
}


export const DownloadVideo = async (videoUrl, setProgress) => {
    try {
        console.log(videoUrl);
        const { data } = await Axios({
            url: videoUrl,
            method: 'GET',
            responseType: 'blob',
            onDownloadProgress: (progressEvent) => {
                const { loaded, total } = progressEvent;
                const percent = Math.floor((loaded * 100) / total);
                setProgress(percent);

                if (percent < 100) {
                    toast.loading('Downloading...${percent}%', {
                        position: 'bottom-right',
                        style: {
                            background: '#0B0F29',
                            color: '#fff',
                            borderRadius: '10px',
                            border: '.5px solid #F20000',
                            padding: '16px',
                        },
                    });
                } else {
                    toast.dismiss(); 
                }
            },
        });


        return data;
    } catch (error) {
        console.error('Error downloading video:', error);
        toast.error('Error downloading video');
        throw error;
    }
};

