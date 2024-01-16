import { useParams } from 'react-router-dom';
import { Movies } from '../data';
import Layout from '../layout/Layout';
import MovieCasts from '../components/SingleMovie/MovieCasts';
import MovieReviews from '../components/SingleMovie/MovieReviews';
import Titles from '../components/Titles';
import { BsCollectionFill } from 'react-icons/bs';
import Movie from '../components/Movie';
import { useContext, useEffect, useState } from 'react';
import ShareMovieModal from '../components/Modals/ShareModal';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieById } from '../redux/actions/moviesAction';
import Loader from '../components/Notification/Loader';
import { RiMovie2Line } from 'react-icons/ri';
import { DownloadVideo } from '../context/functionality';
import { SidebarContext } from '../context/DrawerContext';
import FileSaver from "file-saver";
import MovieInfo from '../components/SingleMovie/MovieInfo';

const SingleMoviePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams();
  console.log(id);

  const { progress, setProgress } = useContext(SidebarContext);

  const dispatch = useDispatch();
  const { isLoading, isError, movie } = useSelector((state) => state.getMovieById);
  // const movie = Movies.find((movie) => movie.name === name);

  const downloadMovie = async (videoUrl, name) => {
    await DownloadVideo(videoUrl, setProgress).then((data) => {
      setProgress(0);
      FileSaver.saveAs(data, name);
    })
  }

  useEffect(() => {
    dispatch(getMovieById(id));
  }, [dispatch, id])

  console.log(movie);


  const relatedMovies = Movies.filter((m) => m.category === movie?.category);


  return (
    <Layout>
      {
        isLoading ?
          (
            <div className='w-full gap-6 flex-column min-h-screen'>
              <Loader />
            </div>
          ) :
          isError ?
            (
              <div className='w-full gap-6 flex-column min-h-screen'>
                <div className='flex-column w-24 h-24 p-5 mb-4 rounded-full bg-dry text-subMain text-6xl'>
                  <RiMovie2Line />
                </div>
                <p className='text-border text-md'>
                  Something Went Wrong
                </p>
              </div>
            ) :
            (
              <>
                <ShareMovieModal modalOpen={modalOpen} setModalOpen={setModalOpen} movie={movie} />
                <MovieInfo movie={movie} setModalOpen={setModalOpen} download={downloadMovie} progress={progress} />
                <div className='container mx-auto min-h-screen px-2 my-6'>
                  <MovieCasts movie={movie} />
                  <MovieReviews movie={movie} />
                </div>
                <div className='container px-2 my-16 mx-auto '>
                  <Titles title='You may also like' Icon={BsCollectionFill} />
                  <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
                    {
                      relatedMovies?.length > 0 &&
                      relatedMovies?.map((movie, index) => (
                        <Movie key={index} movie={movie} />
                      ))
                    }
                  </div>
                </div>
              </>
            )

      }

    </Layout>
  )
}

export default SingleMoviePage;