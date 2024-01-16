import Axios from "./Axios";

// get all movies
export const getAllMoviesService = async ({
    category,
    time,
    language,
    rating,
    year,
    search,
    pageNumber,
}) => {
    const { data } = await Axios.get(`/movies?category=${category}&time=${time}&language=${language}&rating=${rating}&year=${year}&search=${search}&pageNumber=${pageNumber}`);
    
    console.log(data);
    
    return data;
}

// get movie by id service
export const getMovieByIdService = async (id) => {
    const { data } = await Axios.get(`/movies/${id}`);
    return data;
}

// get top rated movies service
export const getTopRatedMoviesService = async () => {
    const { data } = await Axios.get(`/movies/rated/top`);
    return data;
}

// get random movies service
export const getRandomMoviesService = async () => {
    const { data } = await Axios.get(`/movies/random/all`);
    return data;
}

// get review on movie
export const reviewToMovie = async (token, id, review) => {
    const { data } = await Axios.post(`/movies/reviews/${id}`, review, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

// delete movie service
export const deleteMovie = async (id, token) => {
    const { data } = await Axios.delete(`/movies/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

// delete all movie service
export const deleteAllMovie = async (token) => {
    const { data } = await Axios.delete(`/movies`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}


// create movie by admin service
export const createMovieByAdminService = async (movieData, token) => {
    const { data } = await Axios.post(`/movies/`, movieData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

// update movie by admin service
export const updateMovieByAdminService = async (id, movieData, token) => {
    const { data } = await Axios.put(`/movies/${id}`, movieData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}