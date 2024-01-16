import * as userConstants from "../constants/userConstants";

// register Reducer
export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case userConstants.USER_REGISTER_REQUEST:
            return {
                isLoading: true,
            };
        case userConstants.USER_REGISTER_SUCCESS:
            return {
                isLoading: false,
                userInfo: action.payload,
                isSuccess: true,
            };
        case userConstants.USER_REGISTER_FAIL:
            return {
                isLoading: false,
                isSuccess: false,
                isError: action.payload,
            };
        case userConstants.USER_REGISTER_RESET:
            return {};
        default:
            return state;
    }
}

// login Reducer
export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case userConstants.USER_LOGIN_REQUEST:
            return {
                isLoading: true,
            };
        case userConstants.USER_LOGIN_SUCCESS:
            console.log();

            return {
                isLoading: false,
                userInfo: action.payload,
                isSuccess: true,
            };
        case userConstants.USER_LOGIN_FAIL:
            return {
                isLoading: false,
                isSuccess: false,
                isError: action.payload,
            };
        case userConstants.USER_LOGIN_RESET:
            return {};
        case userConstants.USER_LOGOUT:
            return {};
        default:
            return state;
    }
}

// user update Reducer
export const userUpdateReducer = (state = {}, action) => {

    switch (action.type) {
        case userConstants.USER_UPDATE_PROFILE_REQUEST:
            return {
                isLoading: true,
            };
        case userConstants.USER_UPDATE_PROFILE_SUCCESS:
            console.log("updated profile", action);

            return {
                isLoading: false,
                userInfo: action.payload,
                isSuccess: true,
            };
        case userConstants.USER_UPDATE_PROFILE_FAIL:
            return {
                isLoading: false,
                isSuccess: false,
                isError: action.payload,
            };
        case userConstants.USER_UPDATE_PROFILE_RESET:
            return {};
        default:
            return state;
    }

}

// user update Reducer
export const userDeleteProfileReducer = (state = {}, action)=> {

    switch (action.type) {
        case userConstants.USER_DELETE_PROFILE_REQUEST:
            return {
                isLoading: true,
            };
        case userConstants.USER_DELETE_PROFILE_SUCCESS:
            return {
                isLoading: false,
                isSuccess: true,
            };
        case userConstants.USER_DELETE_PROFILE_FAIL:
            return {
                isLoading: false,
                isSuccess: false,
                isError: action.payload,
            };
        case userConstants.USER_DELETE_PROFILE_RESET:
            return {};
        default:
            return state;
    }

}

// user CHANGE PASSWORD Reducer
export const userChangePasswordReducer = (state = {}, action) => {

    switch (action.type) {
        case userConstants.USER_CHANGE_PASSWORD_REQUEST:
            return {
                isLoading: true,
            };
        case userConstants.USER_CHANGE_PASSWORD_SUCCESS:
            console.log(action);

            return {
                isLoading: false,
                isSuccess: true,
                message: action.payload.message,
            };
        case userConstants.USER_CHANGE_PASSWORD_FAIL:
            return {
                isLoading: false,
                isSuccess: false,
                isError: action.payload,
            };
        case userConstants.USER_CHANGE_PASSWORD_RESET:
            return {};
        default:
            return state;
    }

}

// getting users all favourite movies
export const getUserAllFavouritesMovieReducer = (state = { likedMovies: [] }, action) => {

    switch (action.type) {
        case userConstants.GET_USER_FAVOURITE_MOVIE_REQUEST:
            return {
                isLoading: true,
            };
        case userConstants.GET_USER_FAVOURITE_MOVIE_SUCCESS:
            console.log(action.payload);

            return {
                isLoading: false,
                isSuccess: true,
                likedMovies: action.payload.likedMovies,
            };
        case userConstants.GET_USER_FAVOURITE_MOVIE_FAIL:
            return {
                isLoading: false,
                isSuccess: false,
                isError: action.payload,
            };
        case userConstants.GET_USER_FAVOURITE_MOVIE_RESET:
            return {
                likedMovies: []
            };
        default:
            return state;
    }

}

//delete user all favourites movie
export const deleteUserAllFavouritesMovieReducer = (state = {}, action) => {

    switch (action.type) {
        case userConstants.DELETE_USER_ALL_FAVOURITE_MOVIE_REQUEST:
            return {
                isLoading: true,
            };
        case userConstants.DELETE_USER_ALL_FAVOURITE_MOVIE_SUCCESS:
            console.log(action);

            return {
                isLoading: false,
                isSuccess: true,
                message: action.payload?.message
            };
        case userConstants.DELETE_USER_ALL_FAVOURITE_MOVIE_FAIL:
            return {
                isLoading: false,
                isSuccess: false,
                isError: action.payload,
            };
        case userConstants.DELETE_USER_ALL_FAVOURITE_MOVIE_RESET:
            return {};
        default:
            return state;
    }

}

//get all users by admin
export const getAllUsersByAdminReducer = (state = { users: [] }, action) => {

    switch (action.type) {
        case userConstants.GET_ALL_USERS_REQUEST:
            return {
                isLoading: true,
            };
        case userConstants.GET_ALL_USERS_SUCCESS:
            console.log(action);

            return {
                isLoading: false,
                isSuccess: true,
                users: action.payload?.users,
            };
        case userConstants.GET_ALL_USERS_FAIL:
            return {
                isLoading: false,
                isSuccess: false,
                isError: action.payload,
            };
        case userConstants.GET_ALL_USERS_RESET:
            return {
                users: []
            };
        default:
            return state;
    }

}

//delete user all favourites movie
export const deleteUserByAdminReducer = (state = {}, action) => {

    switch (action.type) {
        case userConstants.DELETE_USER_BY_ADMIN_REQUEST:
            return {
                isLoading: true,
            };
        case userConstants.DELETE_USER_BY_ADMIN_SUCCESS:
            console.log(action);

            return {
                isLoading: false,
                isSuccess: true,
                message: action.payload?.message,
            };
        case userConstants.DELETE_USER_BY_ADMIN_FAIL:
            return {
                isLoading: false,
                isSuccess: false,
                isError: action.payload,
            };
        case userConstants.DELETE_USER_BY_ADMIN_RESET:
            return {};
        default:
            return state;
    }

}

// LIKE MOVIE REDUCER
export const likeMovieReducer = (state = {}, action) => {

    switch (action.type) {
        case userConstants.LIKE_MOVIE_REQUEST:
            return {
                isLoading: true,
            };
        case userConstants.LIKE_MOVIE_SUCCESS:
            console.log(action);

            return {
                isLoading: false,
                isSuccess: true,
            };
        case userConstants.LIKE_MOVIE_FAIL:
            return {
                isLoading: false,
                isSuccess: false,
                isError: action.payload,
            };
        case userConstants.LIKE_MOVIE_RESET:
            return {};
        default:
            return state;
    }

}