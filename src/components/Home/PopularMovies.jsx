import React from 'react'
import Titles from '../Titles';
import { BsCollectionFill } from "react-icons/bs";
import Loader from '../Notification/Loader';
import Empty from '../Notification/Empty';
import Movie from '../Movie';

const PopularMovies = ({ movies, isLoading }) => {
    return (
        <div className='my-16'>
            <Titles title='Popular Movies' Icon={BsCollectionFill} />
            {
                isLoading ?
                    (
                        <Loader />
                    )
                    : movies && movies.length > 0 ?
                        (
                            <div className='grid grid-cols-1 sm:mt-12 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                                {
                                    movies.map((movie, index) => (
                                        <Movie key={index} movie={movie} />
                                    ))
                                }
                            </div>
                        ) : (
                            <div className='mt-4'>
                                <Empty message="Sorry, it seems like we have deleted all the movies. Please check after sometime" />
                            </div>
                        )
            }

        </div>
    )
}

export default PopularMovies