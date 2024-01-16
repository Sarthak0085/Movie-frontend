import * as categoryConstants from "../constants/categoryConstants";

//get all categories
export const getAllCategoriesReducers = (state = { categories: [] }, action) => {

    switch (action.type) {
        case categoryConstants.GET_ALL_CATEGORIES_REQUEST:
            return {
                isLoading: true,
            };
        case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
            console.log(action);

            return {
                isLoading: false,
                isSuccess: true,
                categories: action.payload,
            };
        case categoryConstants.GET_ALL_CATEGORIES_FAIL:
            return {
                isLoading: false,
                isSuccess: false,
                isError: action.payload,
            };
        default:
            return state;
    }

}

//create new category
export const createNewCategoryReducer = (state = {}, action) => {

    switch (action.type) {
        case categoryConstants.CREATE_CATEGORY_REQUEST:
            return {
                isLoading: true,
            };
        case categoryConstants.CREATE_CATEGORY_SUCCESS:
            console.log(action);

            return {
                isLoading: false,
                isSuccess: true,
                message: action.payload?.message,
            };
        case categoryConstants.CREATE_CATEGORY_FAIL:
            return {
                isLoading: false,
                isSuccess: false,
                isError: action.payload,
            };
        case categoryConstants.CREATE_CATEGORY_RESET:
            return {};
        default:
            return state;
    }

}

//update category
export const updateCategoryReducer = (state = {}, action) => {

    switch (action.type) {
        case categoryConstants.UPDATE_CATEGORY_REQUEST:
            return {
                isLoading: true,
            };
        case categoryConstants.UPDATE_CATEGORY_SUCCESS:
            console.log(action);

            return {
                isLoading: false,
                isSuccess: true,
                message: action.payload?.message,
            };
        case categoryConstants.UPDATE_CATEGORY_FAIL:
            return {
                isLoading: false,
                isSuccess: false,
                isError: action.payload,
            };
        case categoryConstants.UPDATE_CATEGORY_RESET:
            return {};
        default:
            return state;
    }

}

//update category
export const deleteCategoryReducer = (state = {}, action) => {

    switch (action.type) {
        case categoryConstants.DELETE_CATEGORY_REQUEST:
            return {
                isLoading: true,
            };
        case categoryConstants.DELETE_CATEGORY_SUCCESS:
            console.log(action);

            return {
                isLoading: false,
                isSuccess: true,
                message: action.payload?.message,
            };
        case categoryConstants.DELETE_CATEGORY_FAIL:
            return {
                isLoading: false,
                isSuccess: false,
                isError: action.payload,
            };
        case categoryConstants.DELETE_CATEGORY_RESET:
            return {};
        default:
            return state;
    }

}