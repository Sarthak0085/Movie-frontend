/* eslint-disable react/prop-types */
import { useState } from 'react'
import { BsBookmarkStarFill, BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IfMovieLiked } from '../../context/functionality'
import { likeMovieAction } from '../../redux/actions/userAction'
import Empty from '../Notification/Empty'
import Loader from '../Notification/Loader'
import Rating from '../Rating'
import Titles from '../Titles'

const Swipper = ({ prevEl, nextEl, setPrevEl, setNextEl, movies }) => {

    const className = "hover:bg-dry transitions text-sm rounded w-8 h-8 flex-column bg-subMain text-white ";

    const { isLoading: likeLoading } = useSelector((state) => state.userLikeMovie);
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
    }

    return (
        <>
            <Swiper
                navigation={{ prevEl, nextEl }}
                autoplay={true}
                speed={1000}
                loop={true}
                modules={[Navigation, Autoplay]}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    }
                }}
            >
                {movies?.map((movie, index) => (
                    <SwiperSlide key={index}>
                        <div className='p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden'>
                            <img
                                src={movie?.image ? movie?.image : ""}
                                alt={movie?.name}
                                className='w-full h-full object-cover rounded-md'
                            />
                            <div className='px-4 hoveres gap-6 text-center absolute bg-black bg-opacity-70 left-0 right-0 bottom-0 top-0'>
                                <button
                                    onClick={() => likeMovie(movie)}
                                    disabled={likeLoading}
                                    className={`w-12 h-12 flex-column transitions
                                      ${isLiked(movie) ? "text-subMain hover:bg-white" : "text-white"}
                                      hover:bg-subMain rounded-full bg-white bg-opacity-30 ${isLiked(movie) || likeLoading && "cursor-not-allowed"}`}>
                                    <FaHeart />
                                </button>
                                <Link to={`/movie/${movie?._id}`} className='font-semibold text-xl truncated line-clmap-2'>
                                    {movie?.name}
                                </Link>
                                <div className='flex gap-2 text-star'>
                                    <Rating value={movie?.rating} />
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='w-full px-1 flex-rows gap-6 pt-12'>
                <button className={className} ref={(node) => setPrevEl(node)} >
                    <BsCaretLeftFill />
                </button>
                <button className={className} ref={(node) => setNextEl(node)} >
                    <BsCaretRightFill />
                </button>
            </div>
        </>

    )
}


const TopRated = ({ isLoading, movies }) => {

    const [prevEl, setPrevEl] = useState(null);
    const [nextEl, setNextEl] = useState(null);




    return (
        <div className='my-16'>
            <Titles title='Top Rated Movies' Icon={BsBookmarkStarFill} />
            {
                isLoading ? (
                    <Loader />
                ) : movies && movies?.length > 0 ? (
                    <div className="mt-10">
                        <Swipper nextEl={nextEl} prevEl={prevEl} setNextEl={setNextEl} setPrevEl={setPrevEl} movies={movies} />
                    </div>
                ) : (
                    <div className='mt-10'>
                        <Empty message="Sorry, it seems like we have deleted all the movies. Please check after sometime" />
                    </div>
                )
            }

        </div>
    )
}

export default TopRated