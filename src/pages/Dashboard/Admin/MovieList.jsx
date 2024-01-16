import Sidebar from '../Sidebar'
import Table from '../../../components/Table'
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { deleteAllMovieAction, deleteMovieAction, getAllMoviesAction } from '../../../redux/actions/moviesAction';
import Loader from '../../../components/Notification/Loader';
import Empty from '../../../components/Notification/Empty';
import { TbPlayerTrackNext, TbPlayerTrackPrev } from 'react-icons/tb';

const MovieLists = () => {

    const dispatch = useDispatch();
    const { isLoading, isError, movies, pages, page } = useSelector((state) => state.getAllMovies);

    const { isLoading: deleteLoading, isError: deleteError } = useSelector((state) => state.deleteMovie);
    const { isLoading: deleteAllLoading, isError: deleteAllError } = useSelector((state) => state.deleteAllMovie);

    useEffect(() => {
        if (isError || deleteError || deleteAllError) {
            toast.error(isError || deleteError || deleteAllError);
        }

        dispatch(getAllMoviesAction({}))
    }, [dispatch]);

    const deleteMovieHandler = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            dispatch(deleteMovieAction(id));
        }
    }

    const deleteAllMovieHandler = () => {
        if (window.confirm("Are you sure you want to delete all movies?")) {
            dispatch(deleteAllMovieAction());
        }
    }

    const prevPage = () => {
        dispatch(getAllMoviesAction({ pageNumber: page - 1 }))
    }

    const nextPage = () => {
        dispatch(getAllMoviesAction({ pageNumber: page + 1 }))
    }


    return (
        <Sidebar>
            <div className="flex flex-col gap-6">
                <div className="flex-btn gap-2">
                    <h2 className="text-xl font-bold">Movies List</h2>
                    {
                        movies && movies?.length > 0 &&
                        <button
                            onClick={deleteAllMovieHandler}
                            disabled={deleteAllLoading}
                            className={`bg-subMain font-medium hover:bg-main text-white transitions rounded-md border border-subMain w-full py-3 px-6 sm:w-auto ${deleteLoading && "cursor-not-allowed"}`}>
                            {deleteAllLoading ? "Deleting..." : "Delete All"}
                        </button>
                    }
                </div>
                {
                    isLoading || deleteLoading ?
                        (<Loader />)
                        : movies && movies.length ?
                            (
                                <>
                                    <Table
                                        data={movies}
                                        admin={true}
                                        Icon={AiFillDelete}
                                        deleteHandler={deleteMovieHandler}
                                    />

                                    <div className='w-full flex-rows gap-6 md:my-20 my-10'>
                                        <button
                                            onClick={prevPage}
                                            disabled={page === 1}
                                            className={`text-white py-2 px-4 rounded font-semibold border-2 border-subMain hover:bg-subMain ${page === 1 && "cursor-not-allowed"}`}>
                                            <TbPlayerTrackPrev className="text-xl" />
                                        </button>
                                        <button
                                            onClick={nextPage}
                                            disabled={page === pages}
                                            className={`text-white py-2 px-4 rounded font-semibold border-2 border-subMain hover:bg-subMain ${page === pages && "cursor-not-allowed"}`}>
                                            <TbPlayerTrackNext className="text-xl" />
                                        </button>
                                    </div>
                                </>
                            ) :
                            (
                                <Empty message='You have not added any movie yet.' />
                            )
                }
            </div>
        </Sidebar>
    )
}

export default MovieLists;