import { FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IfMovieLiked } from '../context/functionality';
import { likeMovieAction } from '../redux/actions/userAction';


const Movie = ({ movie }) => {
    const { isLoading } = useSelector((state) => state.userLikeMovie);
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.userLogin);

    const isLiked = IfMovieLiked(movie);

    const likeMovie = (movie) => {
        if (!userInfo) {
            toast.error("Please login to add into your favourites");
        } else {
            console.log("movieId" + movie?._id);

            dispatch(likeMovieAction({ movieId: movie?._id }));

        }
    }

    return (
        <>
            <div className='border border-border p-1 hover:scale-105 transitions relative rounded'>
                <Link to={`/movie/${movie?._id}`} className='w-full'>
                    <img src={movie?.image ? movie?.image : ''} alt={movie.name} className='w-full h-96 object-cover' />
                </Link>
                <div className='absolute flex-btn gap-2 bottom-0 left-0 right-0 bg-main px-2 py-3 text-white bg-opacity-60'>
                    <h3 className='font-semibold truncate'>{movie?.name}</h3>
                    <button
                        onClick={() => likeMovie(movie)}
                        disabled={isLoading}
                        className={`w-9 h-9 flex-column ${isLiked ? "bg-transparent text-subMain" : "bg-subMain text-white"} text-sm transitions hover:bg-transparent border-2 
                  border-submain rounded-md`}>
                        <FaHeart />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Movie