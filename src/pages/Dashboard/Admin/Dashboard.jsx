import { useEffect } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { FaRegListAlt, FaUser } from 'react-icons/fa'
import { HiViewGridAdd } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Empty from '../../../components/Notification/Empty'
import Loader from '../../../components/Notification/Loader'
import Table from '../../../components/Table'
import { getAllCategoriesAction } from '../../../redux/actions/categoryAction'
import { deleteMovieAction, getAllMoviesAction } from '../../../redux/actions/moviesAction'
import { getAllUsersAction } from '../../../redux/actions/userAction'
import Sidebar from '../Sidebar'

const Dashboard = () => {
    const dispatch = useDispatch();

    const { isLoading, isError, movies, totalMovies } = useSelector((state) => state.getAllMovies);

    const { isLoading: catLoading, isError: catError, categories } = useSelector((state) => state.getAllCategories);

    const { isLoading: userLoading, isError: userError, users } = useSelector((state) => state.adminGetAllUsers);

    const { isLoading: deleteLoading, isError: deleteError } = useSelector((state) => state.deleteMovie);


    useEffect(() => {
        dispatch(getAllMoviesAction({}));
        dispatch(getAllCategoriesAction());
        dispatch(getAllUsersAction());

        if (isError || catError || userError || deleteError) {
            toast.error(isError || catError || userError || deleteError);
        }

    }, [dispatch]);

    const deleteMovieHnadler = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            dispatch(deleteMovieAction(id));
        }
    }

    const dashboardData = [
        {
            bg: "bg-orange-600",
            icon: FaRegListAlt,
            title: "Total Movies",
            total: isLoading ? "Loading..." : totalMovies || 0,
        },
        {
            bg: "bg-blue-700",
            icon: HiViewGridAdd,
            title: "Total Categories",
            total: catLoading ? "Loading..." : categories?.length || 0,
        },
        {
            bg: "bg-green-600",
            icon: FaUser,
            title: "Total Users",
            total: userLoading ? "Loading..." : users?.length || 0,
        }
    ]

    return (
        <Sidebar>
            <div className='font-bold text-xl'>Dashboard</div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
                {
                    dashboardData.map((data, index) => (
                        <div key={index} className='p-4 rounded bg-main border-border grid grid-cols-4 gap-2'>
                            <div className={`col-span-1 rounded-full h-12 w-12 flex-column ${data.bg}`}>
                                <data.icon />
                            </div>
                            <div className='col-span-3'>
                                <h2>{data.title}</h2>
                                <p className='text-xs font-bold mt-2'>{data.total}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <h3 className='text-sm font-medium my-6 text-dryGray'>Recent Movies</h3>
            {
                isLoading || deleteLoading ?
                    (
                        <Loader />
                    )
                    : movies && movies.length > 0
                        ? (
                            <Table data={movies?.slice(0, 5)} deleteHandler={deleteMovieHnadler} admin={true} Icon={AiFillDelete} />
                        )
                        : (
                            <Empty message='Empty' />
                        )
            }
            {/* <Table data={Movies.slice(0,5)} admin={true} Icon={AiFillDelete} /> */}
        </Sidebar>
    )
}

export default Dashboard;