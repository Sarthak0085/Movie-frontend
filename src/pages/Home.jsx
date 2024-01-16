import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Home/Banner';
import PopularMovies from '../components/Home/PopularMovies';
import Promos from '../components/Home/Promos';
import TopRated from '../components/Home/TopRated';
import Layout from '../layout/Layout';
import { useEffect } from 'react';
import { getAllMoviesAction, getAllRandomMovies, getTopRatedMovies } from '../redux/actions/moviesAction';
import { toast } from 'react-toastify';

const Home = () => {

    const dispatch = useDispatch();

    const { isLoading, isError, movies } = useSelector((state) => state.getAllMovies);

    const { isLoading: randomLoading, isError: randomError, movies: randomMovies } = useSelector((state) => state.getRandomMovies);

    const { isLoading: topRatedLoading, isError: topRatedError, movies: topRatedMovies } = useSelector((state) => state.getTopRatedMovies);


    console.log("movies", movies);

    useEffect(() => {
        dispatch(getAllMoviesAction({}));
        dispatch(getAllRandomMovies());
        dispatch(getTopRatedMovies());

        if (isError || randomError || topRatedError) {
            toast.error(isError || randomError || topRatedError);
        }

    }, [dispatch]);


    return (
        <Layout>
            <div className='container min-h-screen mx-auto px-2 mb-6'>
                <Banner movies={movies} isLoading={isLoading} />
                <PopularMovies movies={randomMovies} isLoading={randomLoading} />
                <Promos />
                <TopRated movies={topRatedMovies} isLoading={topRatedLoading} />
            </div>
        </Layout>
    )
}

export default Home;