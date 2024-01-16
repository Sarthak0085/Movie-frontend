import FlexMovieItem from '../FlexMovieItem'
import { FaDownload, FaPlay, FaShareAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Rating from '../Rating'

const MovieInfo = ({ movie, setModalOpen, download, progress }) => {

    return (
        <div className='w-full relative xl:h-screen text-white'>
            <img
                src={movie?.image ? movie?.image : ""}
                alt={movie?.name}
                className='w-full hidden xl:inline-block h-full object-cover'
            />
            <div className='xl:bg-main bg-dry flex-column xl:bg-opacity-90 xl:absolute left-0 top-0 right-0 bottom-0'>
                <div className='container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-column py-10 lg:py-20 gap-8'>
                    <div className="xl:grid-cols-1 w-full xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden">
                        <img
                            src={movie?.titleImage ? movie?.titleImage : "1.jpg"}
                            alt={movie?.name}
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div className='col-span-2 md:grid grid-cols-5 gap-4 items-center'>
                        <div className="col-span-3 flex flex-col gap-10">
                            {/* Title */}
                            <h1 className='text-2xl font-bold xl:text-4xl capitalize font-sans'>
                                {movie?.name}
                            </h1>
                            <div className="flex items-center gap-4 text-dryGray font-medium">
                                <div className='flex-column bg-subMain text-xs px-2 py-1'>
                                    HD 4k
                                </div>
                                <FlexMovieItem movie={movie} />
                            </div>
                            {/* Description  */}
                            <p className='text-text text-sm leading-7'>
                                {movie?.desc}
                            </p>
                            {/* Rating  */}
                            <div className='flex mb-6 gap-2 text-lg text-star'>
                                <Rating value={movie?.rating} />
                            </div>
                            <div className="grid sm:grid-cols-5 grid-cols-3 gap-4 p-6 bg-main border border-gray-800 rounded-lg">
                                {/* Share Movie  */}
                                <div className="col-span-1 flex-column border-r border-border">
                                    <button
                                        onClick={() => setModalOpen(true)}
                                        className='w-10 h-10 flex-column rounded-lg bg-white bg-opacity-20'>
                                        <FaShareAlt />
                                    </button>
                                </div>
                                {/* Movie Language  */}
                                <div className='col-span-2 flex-column font-medium text-sm'>
                                    <p>Language: <span className='ml-2 truncate'>{movie?.language}</span></p>
                                </div>
                                {/* Watch movie link  */}
                                <div className='sm:col-span-2 col-span-3 flex justify-end font-medium text-sm'>
                                    <Link
                                        to={`/watch/${movie?._id}`}
                                        className='bg-dry py-4 hover:bg-subMain transitions border-2 border-subMain rounded flex-rows gap-4 w-full sm:py-3'
                                    >
                                        <FaPlay className="w-3 h-3" /> Watch
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-2 md:mt-0 mt-2 flex justify-end'>
                            <button
                                disabled={progress}
                                onClick={() => download(movie?.video, movie?.name)}
                                className={`md:w-1/4 w-full relative flex-column border border-subMain hover:bg-subMain ${progress && "cursor-not-allowed"} bg-transparent text-white transitions md:h-64 h-20 rounded font-medium `}>
                                <div className='flex-rows gap-6 text-md uppercase tracking-widest absolute md:rotate-90'>
                                    Download <FaDownload className="w-6 h-6" />
                                </div>
                            </button>
                            {/* <a href={movie?.video}
                              className={`md:w-1/4 w-full relative flex-column border border-subMain hover:bg-subMain ${progress && "cursor-not-allowed"} bg-transparent text-white transitions md:h-64 h-20 rounded font-medium `}>
                              <div className='flex-rows gap-6 text-md uppercase tracking-widest absolute md:rotate-90'>
                                  Download <FaDownload className="w-6 h-6" />
                              </div>
                          </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo