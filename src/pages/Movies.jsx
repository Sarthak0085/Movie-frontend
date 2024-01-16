import { useEffect, useMemo, useState } from 'react'
import { RiMovie2Line } from 'react-icons/ri'
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb"
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Filters from '../components/Filters'
import Movie from '../components/Movie'
import Loader from '../components/Notification/Loader'
import { languageData, ratingData, timeData, yearData } from '../filterData'
import Layout from '../layout/Layout'
import { getAllCategoriesAction } from '../redux/actions/categoryAction'
import { getAllMoviesAction } from '../redux/actions/moviesAction'

const MoviesPage = () => {
    const [category, setCategory] = useState({ title: "All Categories" });
    const [year, setYear] = useState(yearData[0]);
    const [time, setTime] = useState(timeData[0]);
    const [rating, setRating] = useState(ratingData[0]);
    const [language, setLanguage] = useState(languageData[0]);

    const { search } = useSearchParams();
    const dispatch = useDispatch();
    const { isLoading, isError, movies, pages, page } = useSelector((state) => state.getAllMovies);

    const { categories } = useSelector((state) => state.getAllCategories);

    const queries = useMemo(() => {
        const query = {
            category: category?.title === "All Categories" ? "" : category?.title,
            language: language?.title === "All Languages" ? "" : language?.title,
            year: year?.title.replace(/\D/g, ""),
            time: time?.title.replace(/\D/g, ""),
            rating: rating?.title.replace(/\D/g, ""),
            search: search ? search : "",
        }
        return query;
    }, [category, time, language, rating, year])

    useEffect(() => {
        dispatch(getAllCategoriesAction());

        if (isError) {
            toast.error(isError);
        }

        dispatch(getAllMoviesAction(queries))
    }, [dispatch, queries])

    const prevPage = () => {
        dispatch(getAllMoviesAction({
            ...queries,
            pageNumber: page - 1
        }))
    }

    const nextPage = () => {
        dispatch(getAllMoviesAction({
            ...queries,
            pageNumber: page + 1
        }))
    }

    const datas = {
        categories: categories,
        category: category,
        setCategory: setCategory,
        language: language,
        setLanguage: setLanguage,
        rating: rating,
        setRating: setRating,
        time: time,
        setTime: setTime,
        year: year,
        setYear: setYear
    }

    return (
        <Layout>

            <div className='min-h-screen container mx-auto my-6 px-2'>
                <Filters data={datas} />
                <p className='text-lg font-medium my-6'>
                    Total <span className="font-bold text-subMain">{movies && movies?.length}</span>{" "} Movies Found
                    {search && `for "${search}"`}
                </p>
                {
                    isLoading ?
                        (
                            <div className='w-full h-6 flex-column min-h-screen'>
                                <Loader />
                            </div>
                        ) : movies && movies.length > 0 ?
                            (
                                <>
                                    <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
                                        {
                                            movies.map((movie, index) => (
                                                <Movie key={index} movie={movie} />
                                            ))
                                        }
                                    </div>
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
                            )
                            : (
                                <div className='w-full h-6 flex-column min-h-screen'>
                                    <div className='w-24 h-24 p-5 rounded-full mb-4 bg-dry text-subMain text-6xl flex-column'>
                                        <RiMovie2Line />
                                    </div>
                                    <p className='text-gray-400 text-md'>We haven&apos;t added any movie yet. Please Refresh after sometime.</p>
                                </div>
                            )
                }

            </div>
        </Layout>
    )
}

export default MoviesPage