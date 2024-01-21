import * as userConstants from "../constants/userConstants";
import * as userApis from "../APIs/userServices";
import { ErrorsAction, tokenProtection } from "../protection";
import { toast } from "react-toastify";

//login action
export const registerAction = (data) => async (dispatch) => {
    try {
        dispatch({ type: userConstants.USER_REGISTER_REQUEST });
        const response = await userApis.registerService(data);
        dispatch({ type: userConstants.USER_REGISTER_SUCCESS, payload: response });
        toast.success("Registration Successful. Please login to access now.")
        // dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, userConstants.USER_REGISTER_FAIL);
    }
}

//login action
export const loginAction = (data) => async (dispatch) => {
    try {
        dispatch({ type: userConstants.USER_LOGIN_REQUEST });
        const response = await userApis.loginService(data);
        dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, userConstants.USER_LOGIN_FAIL);
    }
}

export const logoutAction = () => (dispatch) => {
    userApis.logoutService();
    dispatch({ type: userConstants.USER_LOGOUT });
    dispatch({ type: userConstants.USER_LOGIN_FAIL });
    dispatch({ type: userConstants.USER_REGISTER_RESET });
}

//update Profile action
export const updateProfileAction = (user) => async (dispatch, getState) => {
    try {
        dispatch({ type: userConstants.USER_UPDATE_PROFILE_REQUEST });
        const response = await userApis.updateProfileService(user, tokenProtection(getState));
        dispatch({ type: userConstants.USER_UPDATE_PROFILE_SUCCESS, payload: response });
        // toast.success("Profile updated Successfully");
        dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, userConstants.USER_UPDATE_PROFILE_FAIL);
    }
}

//delete Profile action
export const deleteProfileAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: userConstants.USER_DELETE_PROFILE_REQUEST });
        await userApis.deleteUserProfileService(tokenProtection(getState));
        dispatch({ type: userConstants.USER_DELETE_PROFILE_SUCCESS });
        // toast.success("Profle deleted successfully");
        // toast.success("Profile updated Successfully");
        dispatch(loginAction())
    } catch (error) {
        ErrorsAction(error, dispatch, userConstants.USER_UPDATE_PROFILE_FAIL);
    }
}

//chnage password action
export const changeUserPasswordAction = (passwords) => async (dispatch, getState) => {
    try {
        dispatch({ type: userConstants.USER_CHANGE_PASSWORD_REQUEST });
        const response = await userApis.changeUserPasswordProfile(passwords, tokenProtection(getState));
        dispatch({ type: userConstants.USER_CHANGE_PASSWORD_SUCCESS, payload: response });
        // toast.success("Profile updated Successfully");
        // dispatch(loginAction())
    } catch (error) {
        ErrorsAction(error, dispatch, userConstants.USER_CHANGE_PASSWORD_FAIL);
    }
}

//getting user all favourites movie action
export const getUserAllFavouritesMovieAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: userConstants.GET_USER_FAVOURITE_MOVIE_REQUEST });
        const response = await userApis.getFavouriteMoviesService(tokenProtection(getState));
        dispatch({ type: userConstants.GET_USER_FAVOURITE_MOVIE_SUCCESS, payload: response });
        console.log(response);

        // toast.success("Profile updated Successfully");
        // dispatch(loginAction())
    } catch (error) {
        ErrorsAction(error, dispatch, userConstants.GET_USER_FAVOURITE_MOVIE_FAIL);
    }
}

//deleting user all favourites movie action
export const deleteUserAllFavouritesMovieAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: userConstants.DELETE_USER_ALL_FAVOURITE_MOVIE_REQUEST });
        const response = await userApis.deleteAllFavouritesMoviesService(tokenProtection(getState));
        dispatch({ type: userConstants.DELETE_USER_ALL_FAVOURITE_MOVIE_SUCCESS, payload: response });
        toast.success("All Favourites removed Successfully");
        dispatch(getUserAllFavouritesMovieAction());
        // dispatch(loginAction())
    } catch (error) {
        ErrorsAction(error, dispatch, userConstants.DELETE_USER_ALL_FAVOURITE_MOVIE_RESET);
    }
}

//get all users by admin action
export const getAllUsersAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: userConstants.GET_ALL_USERS_REQUEST });
        const response = await userApis.getAllUsersSevice(tokenProtection(getState));
        dispatch({ type: userConstants.GET_ALL_USERS_SUCCESS, payload: response });
        // toast.success("Profile updated Successfully");
        // dispatch(loginAction())
    } catch (error) {
        ErrorsAction(error, dispatch, userConstants.GET_ALL_USERS_FAIL);
    }
}

//delete user by admin action
export const deleteUserAction = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: userConstants.DELETE_USER_BY_ADMIN_REQUEST });
        const response = await userApis.deleteUserByIdService(id, tokenProtection(getState));
        dispatch({ type: userConstants.DELETE_USER_BY_ADMIN_SUCCESS, payload: response });
        // toast.success("Profile updated Successfully");
        // dispatch(loginAction())
    } catch (error) {
        ErrorsAction(error, dispatch, userConstants.DELETE_USER_BY_ADMIN_FAIL);
    }
}

//like movie action
export const likeMovieAction = (movieId) => async (dispatch, getState) => {
    try {
        dispatch({ type: userConstants.LIKE_MOVIE_REQUEST });
        const response = await userApis.likeMovieService(movieId, tokenProtection(getState));
        dispatch({ type: userConstants.LIKE_MOVIE_SUCCESS, payload: response });
        // toast.success("Movie added to your favourites");
        dispatch(getUserAllFavouritesMovieAction());
        // dispatch(loginAction())
    } catch (error) {
        ErrorsAction(error, dispatch, userConstants.LIKE_MOVIE_FAIL);
    }
}