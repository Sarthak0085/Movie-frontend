import { FaUserFriends } from "react-icons/fa"
import Titles from "../Titles"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

const MovieCasts = ({ movie }) => {
    return (
        movie && movie?.cast?.length > 0 &&
        (
            <div className="my-16">
                <Titles title="Movie Cast" Icon={FaUserFriends} />
                <div className="mt-10">
                    <Swiper
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false
                        }}
                        speed={1000}
                        modules={[Autoplay]}
                        loop={true}
                        spaceBetween={10}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            400: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                            1280: {
                                slidesPerView: 5,
                                spaceBetween: 30,
                            }
                        }}
                    >
                        {
                            movie?.cast?.map((cast, index) => (
                                <SwiperSlide key={index}>
                                    <div className="w-full p-3 italic text-sm text-text rounded-full flex-column bg-dry border border-gray-800">
                                        <img
                                            src={cast?.image ? cast?.image : ""}
                                            alt={cast?.name}
                                            className="w-full h-64 rounded-full object-cover"
                                        />
                                        <p>{cast?.name}</p>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                </div>
            </div>
        )
    )
}

export default MovieCasts