import Sidebar from './Sidebar'
import Table from '../../components/Table'
import { IoIosRemoveCircle } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteUserAllFavouritesMovieAction, getUserAllFavouritesMovieAction, likeMovieAction } from '../../redux/actions/userAction';
import { toast } from 'react-toastify';
import Loader from '../../components/Notification/Loader';
import Empty from '../../components/Notification/Empty';

const Favourites = () => {

    const dispatch = useDispatch();

    const { userInfo } = useSelector((state) => state.userLogin);

    const { isLoading, isError, likedMovies } = useSelector((state) => state.getUserAllFavouritesMovie);
    const { isLoading: deleteLoading, isError: deleteError } = useSelector((state) => state.getUserAllFavouritesMovie);

    const likeMovie = (id) => {
        console.log("movieId :" + id);

        if (!userInfo) {
            toast.error("Please login to add into your favourites");
        } else {
            // console.log("movieId"+movie?._id);

            dispatch(likeMovieAction({ movieId: id }))

        }
    }

    const deleteAllFavouriteHandler = () => {
        window.confirm("Are you sure you want to delete");
        dispatch(deleteUserAllFavouritesMovieAction());
    }

    // const removeFavourites = 

    useEffect(() => {
        dispatch(getUserAllFavouritesMovieAction())
        if (isError || deleteError) {
            toast.error(isError || deleteError);
            dispatch({ type: isError ? "GET_USER_FAVOURITE_MOVIE_RESET" : "DELETE_USER_ALL_FAVOURITE_MOVIE_RESET" });
        }
    }, [dispatch])

    return (
        <Sidebar>
            <div className="flex flex-col gap-6">
                <div className="flex-btn gap-2">
                    <h2 className="text-xl font-bold">Favourite Movies</h2>
                    {
                        likedMovies && likedMovies?.length > 0 &&
                        <button
                            onClick={deleteAllFavouriteHandler}
                            disabled={deleteLoading}
                            className={`bg-subMain font-medium hover:bg-main text-white transitions rounded-md border border-subMain w-full py-3 px-6 sm:w-auto ${deleteLoading && "cursor-not-allowed"}`}>
                            {deleteLoading ? "Removing..." : "Remove All"}
                        </button>
                    }
                </div>
                {
                    isLoading ?
                        (
                            <Loader />
                        )
                        : likedMovies && likedMovies?.length > 0
                            ? (
                                <Table data={likedMovies} admin={false} Icon={IoIosRemoveCircle} deleteHandler={likeMovie} />
                            )
                            : (
                                <Empty message='You have not added any favourite movie yet' />
                            )
                }
            </div>
        </Sidebar>
    )

}

export default Favourites