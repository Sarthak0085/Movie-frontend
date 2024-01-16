import * as moviesConstants from "../constants/moviesConstants";
import * as moviesApis from "../APIs/moviesService";
import { ErrorsAction, tokenProtection } from "../protection";
import { toast } from "react-toastify";

//get all movies action
export const getAllMoviesAction = (
    {
        category = "",
        time ="" ,
        language = "",
        rating = "",
        year = "",
        search = "",
        pageNumber = "",
    }
) => async (dispatch) => {
    try {
        dispatch({ type: moviesConstants.MOVIE_LIST_REQUEST });
        const response = await moviesApis.getAllMoviesService(
            {
                category,
                time,
                language,
                rating,
                year,
                search,
                pageNumber
            }
        );
        dispatch({ type: moviesConstants.MOVIE_LIST_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, moviesConstants.MOVIE_LIST_FAIL);
    }
}

// get random movies    
export const getAllRandomMovies = () => async (dispatch) => {
    try {
        dispatch({ type: moviesConstants.GET_RANDOM_MOVIE_LIST_REQUEST });
        const response = await moviesApis.getRandomMoviesService();
        dispatch({ type: moviesConstants.GET_RANDOM_MOVIE_LIST_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, moviesConstants.GET_RANDOM_MOVIE_LIST_FAIL);
    }
}

// get top rated movies    
export const getTopRatedMovies = () => async (dispatch) => {
    try {
        dispatch({ type: moviesConstants.TOP_RATED_MOVIE_LIST_REQUEST });
        const response = await moviesApis.getTopRatedMoviesService();
        dispatch({ type: moviesConstants.TOP_RATED_MOVIE_LIST_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, moviesConstants.TOP_RATED_MOVIE_LIST_FAIL);
    }
}

// get movie detail    
export const getMovieById = (id) => async (dispatch) => {
    try {
        dispatch({ type: moviesConstants.GET_MOVIE_DETAILS_REQUEST });
        const response = await moviesApis.getMovieByIdService(id);
        dispatch({ type: moviesConstants.GET_MOVIE_DETAILS_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, moviesConstants.GET_MOVIE_DETAILS_FAIL);
    }
}

//create Review action    
export const createReviewAction = (id, review) => async (dispatch, getstate) => {
    try {
        dispatch({ type: moviesConstants.CREATE_REVIEW_REQUEST });
        const response = await moviesApis.reviewToMovie(tokenProtection(getstate), id, review);
        console.log(response);

        dispatch({ type: moviesConstants.CREATE_REVIEW_SUCCESS, payload: response });
        toast.success("Review created successfully");
        // dispatch({ type: moviesConstants.CREATE_REVIEW_RESET });
        dispatch(getMovieById(id));
    } catch (error) {
        ErrorsAction(error, dispatch, moviesConstants.CREATE_REVIEW_FAIL);
    }
}

//delete movie action    
export const deleteMovieAction = (id) => async (dispatch, getstate) => {
    try {
        dispatch({ type: moviesConstants.DELETE_MOVIE_REQUEST });
        const response = await moviesApis.deleteMovie(id, tokenProtection(getstate));
        dispatch({ type: moviesConstants.DELETE_MOVIE_SUCCESS, payload: response });
        toast.success("Movie deleted successfully");
        // dispatch(getMovieById(id));
    } catch (error) {
        ErrorsAction(error, dispatch, moviesConstants.DELETE_MOVIE_FAIL);
    }
}

//delete all movie action    
export const deleteAllMovieAction = () => async (dispatch, getstate) => {
    try {
        dispatch({ type: moviesConstants.DELETE_ALL_MOVIE_REQUEST });
        const response = await moviesApis.deleteAllMovie(tokenProtection(getstate));
        dispatch({ type: moviesConstants.DELETE_ALL_MOVIE_SUCCESS, payload: response });
        toast.success("All movies deleted successfully");
        // dispatch(getMovieById(id));
    } catch (error) {
        ErrorsAction(error, dispatch, moviesConstants.DELETE_ALL_MOVIE_FAIL);
    }
}

//create movie action    
export const createMovieAction = (movie) => async (dispatch, getstate) => {
    try {
        dispatch({ type: moviesConstants.CREATE_MOVIE_REQUEST });
        const response = await moviesApis.createMovieByAdminService(movie, tokenProtection(getstate));
        dispatch({ type: moviesConstants.CREATE_MOVIE_SUCCESS, payload: response });
        toast.success("Movie created successfully");
        dispatch(deleteAllCastAction());
    } catch (error) {
        ErrorsAction(error, dispatch, moviesConstants.CREATE_MOVIE_FAIL);
    }
}

// add casts
export const addCastsAction = (cast) => async (dispatch, getstate) => {
    dispatch({ type: moviesConstants.ADD_CAST, payload: cast });
    localStorage.setItem("casts", JSON.stringify(getstate().casts.casts));
    console.log(JSON.stringify(localStorage.getItem("casts")));
}

// remove cast
export const removeCastAction = (id) => async (dispatch, getstate) => {
    dispatch({ type: moviesConstants.DELETE_CAST, payload: id });
    localStorage.setItem("casts", JSON.stringify(getstate().casts.casts));
    console.log(JSON.stringify(localStorage.getItem("casts")));
}

// update cast
export const updateCastAction = (cast) => async (dispatch, getstate) => {
    dispatch({ type: moviesConstants.EDIT_CAST, payload: cast });
    localStorage.setItem("casts", JSON.stringify(getstate().casts.casts));
}

// update cast
export const deleteAllCastAction = () => async (dispatch) => {
    dispatch({ type: moviesConstants.RESET_CAST });
    localStorage.removeItem("casts");
}

//update movie action    
export const updateMovieAction = (movie, id) => async (dispatch, getstate) => {
    try {
        dispatch({ type: moviesConstants.UPDATE_MOVIE_REQUEST });
        const response = await moviesApis.updateMovieByAdminService(movie, id, tokenProtection(getstate));
        dispatch({ type: moviesConstants.UPDATE_MOVIE_SUCCESS, payload: response });
        toast.success("Movie updated successfully");
        dispatch(getMovieById(id));
        dispatch(deleteAllCastAction());
    } catch (error) {
        ErrorsAction(error, dispatch, moviesConstants.UPDATE_MOVIE_FAIL);
    }
}