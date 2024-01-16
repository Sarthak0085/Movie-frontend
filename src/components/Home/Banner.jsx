/* eslint-disable react/prop-types */
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FlexMovieItem from "../FlexMovieItem";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import Loader from "../Notification/Loader";
import { RiMovie2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { IfMovieLiked } from "../../context/functionality";
import { toast } from "react-toastify";
import { likeMovieAction } from "../../redux/actions/userAction";

const Swipper = ({ movies }) => {
    const { isLoading } = useSelector((state) => state.userLikeMovie);
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.userLogin);

    const isLiked = (movie) => IfMovieLiked(movie);

    const likeMovie = (movie) => {
        if (!userInfo) {
            toast.error("Please login to add into your favourites");
        } else {
            console.log("movieId" + movie?._id);

            dispatch(likeMovieAction({ movieId: movie?._id }));
        }
    };

    return (
        <Swiper
            direction="vertical"
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            speed={1000}
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="w-full xl:h-96 lg:h-64 h-48 bg-dry"
        >
            {movies.map((movie, index) => (
                <SwiperSlide key={index} className="relative rounded overflow-hidden">
                    <img
                        src={movie?.image ? movie?.image : ""}
                        alt={movie?.name}
                        className="w-full h-auto object-cover"
                    />
                    <div className="absolute xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 left-0 right-0 w-full flex flex-col justify-center lg:gap-8 md:gap-5 gap-4">
                        <h1 className="text-xl sm:text-2xl truncate capitalize font-sans xl:text-4xl font-bold text-white ">
                            {movie?.name}
                        </h1>
                        <div className="flex gap-5 items-center text-dryGray">
                            <FlexMovieItem movie={movie} />
                        </div>
                        <div className="flex gap-5 items-center">
                            <Link
                                to={`/movie/${movie?._id}`}
                                className="bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs"
                            >
                                Watch
                            </Link>

                            <button
                                onClick={() => likeMovie(movie)}
                                disabled={isLoading}
                                className={`bg-white ${isLiked(movie) ? "text-subMain" : "text-white"
                                    } hover:text-subMain transitions px-4 py-3 rounded font-medium text-sm bg-opacity-30`}
                            >
                                <FaHeart />
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

const Banner = ({ movies, isLoading }) => {
    return (
        <div className="w-full relative">
            {isLoading ? (
                <div className="w-full flex-column xl:h-96 lg:h-64 h-48 bg-dry">
                    <Loader />
                </div>
            ) : movies && movies.length > 0 ? (
                <Swipper movies={movies} />
            ) : (
                <div className="w-full flex-column xl:h-96 lg:h-64 h-48 bg-dry">
                    <div className="flex-column w-24 h-24 p-5 mb-4 rounded-full bg-dry text-subMain text-6xl">
                        <RiMovie2Line />
                    </div>
                    <p className="text-border text-md">
                        Sorry, it seems like we have deleted all the movies. Please check
                        after sometime
                    </p>
                </div>
            )}
        </div>
    );
};

export default Banner;
