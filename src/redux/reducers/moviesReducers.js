import * as moviesConstants from "../constants/moviesConstants";

//get all movies
export const getAllMoviesReducers = (state = { movies: [] }, action) => {

    switch (action.type) {
        case moviesConstants.MOVIE_LIST_REQUEST:
            return {
                isLoading: true,
            };
        case moviesConstants.MOVIE_LIST_SUCCESS:
            console.log(action);
            return {
                isLoading: false,
                isSuccess: true,
                movies: action.payload.movies,
                pages: action.payload.pages,
                page: action.payload.page,
                totalMovies: action.payload.totalMovies,
            };
        case moviesConstants.MOVIE_LIST_FAIL:
            return {
                isLoading: false,
                isSuccess: false,
                isError: action.payload,
            };
        default:
            return state;
    }
}

//get top rated movies
export const getTopRatedMoviesReducers = (state = { movies: [] }, action) => {

    switch (action.type) {
        case moviesConstants.TOP_RATED_MOVIE_LIST_REQUEST:
            return {
                isLoading: true,
            };
        case moviesConstants.TOP_RATED_MOVIE_LIST_SUCCESS:
            console.log(action);

            return {
                isLoading: false,
                isSuccess: true,
                movies: action.payload.movies,
            };
        case moviesConstants.TOP_RATED_MOVIE_LIST_FAIL:
            return {
                isLoading: false,
                isSuccess: false,
                isError: action.payload,
            };
        default:
            return state;
    }
}

//get random movies
export const getRandomMoviesReducers = (state = { movies: [] }, action) => {

    switch (action.type) {
        case moviesConstants.GET_RANDOM_MOVIE_LIST_REQUEST:
            return {
                isLoading: true,
            };
        case moviesConstants.GET_RANDOM_MOVIE_LIST_SUCCESS:
            console.log(action);

            return {
                isLoading: false,
                isSuccess: true,
                movies: action.payload.movies,
            };
        case moviesConstants.GET_RANDOM_MOVIE_LIST_FAIL:
            return {
                isLoading: false,
                isSuccess: false,
                isError: action.payload,
            };
        default:
            return state;
    }
}

//get movie details
export const movieDetailsReducers = (state = { movie: {} }, action) => {

    switch (action.type) {
        case moviesConstants.GET_MOVIE_DETAILS_REQUEST:
            return {
                isLoading: true,
            };
        case moviesConstants.GET_MOVIE_DETAILS_SUCCESS:
            console.log(action);

            return {
                isLoading: false,
                isSuccess: true,
                movie: action.payload.movie,
            };
        case moviesConstants.GET_MOVIE_DETAILS_FAIL:
            return {
                isLoading: false,
                isSuccess: false,
                isError: action.payload,
            };
        case moviesConstants.GET_MOVIE_DETAILS_RESET:
            return {
                movie: {}
            };
        default:
            return state;
    }
}

//CREATE REVIEW
export const createReviewReducer = (state = {}, action) => {

    switch (action.type) {
        case moviesConstants.CREATE_REVIEW_REQUEST:
            return {
                isLoading: true,
            };
        case moviesConstants.CREATE_REVIEW_SUCCESS:
            console.log(action);

            return {
                isLoading: false,
                isSuccess: true,
            };
        case moviesConstants.CREATE_REVIEW_FAIL:
            return {
                isLoading: false,
                isSuccess: false,
                isError: action.payload,
            };
        case moviesConstants.CREATE_REVIEW_RESET:
            return {};
        default:
            return state;
    }
}

//get movie details
export const deleteMovieReducer = (state = {}, action) => {

    switch (action.type) {
        case moviesConstants.DELETE_MOVIE_REQUEST:
            return {
                isLoading: true,
            };
        case moviesConstants.DELETE_ALL_MOVIE_SUCCESS:
            console.log(action);

            return {
                isLoading: false,
                isSuccess: true,
            };
        case moviesConstants.DELETE_ALL_MOVIE_FAIL:
            return {
                isLoading: false,
                isSuccess: false,
                isError: action.payload,
            };
        default:
            return state;
    }
}

//delete all movies reducers
export const deleteAllMovieReducer = (state = {}, action) => {

    switch (action.type) {
        case moviesConstants.DELETE_ALL_MOVIE_REQUEST:
            return {
                isLoading: true,
            };
        case moviesConstants.DELETE_ALL_MOVIE_SUCCESS:
            console.log(action);

            return {
                isLoading: false,
                isSuccess: true,
            };
        case moviesConstants.DELETE_ALL_MOVIE_FAIL:
            return {
                isLoading: false,
                isSuccess: false,
                isError: action.payload,
            };
        default:
            return state;
    }
}

//create movie reducers
export const createMovieReducer = (state = {}, action) => {
    switch (action.type) {
        case moviesConstants.CREATE_MOVIE_REQUEST:
            return {
                isLoading: true,
            };
        case moviesConstants.CREATE_MOVIE_SUCCESS:
            console.log(action);

            return {
                isLoading: false,
                isSuccess: true,
            };
        case moviesConstants.CREATE_MOVIE_FAIL:
            return {
                isLoading: false,
                isSuccess: false,
                isError: action.payload,
            };
        case moviesConstants.CREATE_MOVIE_RESET:
            return {};
        default:
            return state;
    }
}

//casts
export const castsReducer = (state = { casts: [] }, action) => {
    switch (action.type) {
        case moviesConstants.ADD_CAST:
            return {
                casts: [...state.casts, action.payload]
            };
        case moviesConstants.EDIT_CAST:
            return {
                casts: state.casts.map((cast) => cast.id === action.payload.id ? action.payload : cast)
            };
        case moviesConstants.DELETE_CAST:
            return {
                ...state,
                casts: state.casts.filter((cast) => cast.id !== action.payload)
            };
        case moviesConstants.RESET_CAST:
            return {
                casts: [],
            };
        default:
            return state;
    }
}

//update movie reducers
export const updateMovieReducer = (state = {}, action) => {
    switch (action.type) {
        case moviesConstants.UPDATE_MOVIE_REQUEST:
            return {
                isLoading: true,
            };
        case moviesConstants.UPDATE_MOVIE_SUCCESS:
            console.log(action);

            return {
                isLoading: false,
                isSuccess: true,
            };
        case moviesConstants.UPDATE_MOVIE_FAIL:
            return {
                isLoading: false,
                isSuccess: false,
                isError: action.payload,
            };
        case moviesConstants.UPDATE_MOVIE_RESET:
            return {};
        default:
            return state;
    }
}