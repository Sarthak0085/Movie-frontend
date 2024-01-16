import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { BsBookmarkStarFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createReviewAction } from "../../redux/actions/moviesAction";
import { Message, Select } from "../Inputs";
import Empty from "../Notification/Empty";
import { InlineError } from "../Notification/Error";
import Rating from "../Rating";
import Titles from "../Titles";
import { CreateReviewValidation } from "../Validation/MovieValidation";

const options = [
    {
        title: "1-Poor",
        value: 1,
    },
    {
        title: "2-Average",
        value: 2,
    },
    {
        title: "3-Good",
        value: 3,
    },
    {
        title: "4-Very-Good",
        value: 4,
    },
    {
        title: "5-Excellent",
        value: 5,
    },
];

const MovieReviews = ({ movie }) => {

    const dispatch = useDispatch();
    const { isLoading, isError } = useSelector((state) => state.createReview);
    const { userInfo } = useSelector((state) => state.userLogin);

    useEffect(() => {
        if (isError) {
            toast.error(isError)
            dispatch({ type: "CREATE_REVIEW_RESET" });
        }

    }, [dispatch, isError]);

    // validate user
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(CreateReviewValidation)
    })

    const onSubmit = (data) => {
        console.log(data);

        dispatch(createReviewAction(movie?._id, data));
    }

    // console.log(!!userInfo);


    return (
        <div className="my-12">
            <Titles title="Reviews" Icon={BsBookmarkStarFill} />
            <div className="mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-2 sm:p-20 rounded">
                <form onSubmit={handleSubmit(onSubmit)} className="xl:col-span-2 w-full flex flex-col gap-8">
                    <h3 className="text-text text-xl font-semibold">
                        {movie?.name} reviews
                    </h3>
                    <p className="text-border text-md leading-7 font-medium">
                        Write a review for this movie.
                    </p>
                    <div className="text-sm w-full">
                        <Select
                            label="Movie Rating"
                            options={options}
                            name="rating"
                            register={{ ...register("rating") }}
                        />
                        <div className="flex my-4 text-lg gap-2 text-star">
                            <Rating value={watch("rating")} />
                        </div>
                        {
                            errors.rating && <InlineError text={errors.rating.message} />
                        }
                        <div className="w-full my-4 gap-6 relative">
                            <Message
                                label="Message"
                                name="comment"
                                placeholder="Enter a short message..."
                                isLoading={isLoading}
                                register={{ ...register("comment") }}
                            />
                            {
                                errors.comment && <InlineError text={errors.comment.message} />
                            }
                            {/* <button
                                      type="submit"
                                      disabled={isLoading}
                                      className={`bg-subMain w-full px-3 py-3 my-2 rounded-lg text-white ${isLoading && "cursor-not-allowed"}`}
                                  >
                                      {isLoading ? "Loading..." : "submit"}
                          </button> */}

                            {userInfo?.user ?
                                (
                                    (<button
                                        type="submit"
                                        disabled={isLoading}
                                        className={`bg-subMain absolute px-3 py-2 right-3 bottom-4 rounded-lg text-white ${isLoading && "cursor-not-allowed"}`}
                                    >
                                        {isLoading ? "Loading..." : "submit"}
                                    </button>)
                                ) :
                                (
                                    <Link
                                        to="/login"
                                        className="bg-main border border-subMain hover:bg-subMain absolute px-3 py-2 right-3 bottom-4 rounded-lg text-white"
                                    >
                                        Login to review
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                </form>

                <div className="col-span-3 flex mt-8 xl:mt-0 flex-col gap-6">
                    <h3 className="text-text text-md font-semibold">
                        Reviews {movie?.reviews && movie?.reviews?.length}
                    </h3>
                    <div className="w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll">
                        {
                            movie?.reviews && movie?.reviews?.length > 0 ? movie?.reviews?.map((user, index) => (
                                <div key={index} className="md:grid flex flex-col w-full grid-cols-12 bg-dry gap-6 p-4 border border-gray-800">
                                    <div className="cols-span-2 hidden md:block">
                                        <img src={user?.userImage ? user?.userImage : ""} alt={user?.fullName} className="w-full h-24 rounded-lg object-cover" />
                                    </div>
                                    <div className="flex col-span-7 flex-col gap-2">
                                        <h2>{user?.fullName}</h2>
                                        <p className="text-text leading-6 font-medium text-xs">
                                            {user?.comment}
                                        </p>
                                    </div>
                                    <div className="col-span-3 flex-rows border-l border-border text-xs gap-1 text-star">
                                        <Rating value={user?.rating} />
                                    </div>
                                </div>
                            )) :
                                <Empty message={`Be first to rate "${movie?.name}"`} />
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MovieReviews