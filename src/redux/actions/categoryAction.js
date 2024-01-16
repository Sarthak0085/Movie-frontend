import * as categoryConstants from "../constants/categoryConstants";
import * as categoryApis from "../APIs/CategoriesServices"
import { ErrorsAction, tokenProtection } from "../protection";
import { toast } from "react-toastify";

//get all categories action
export const getAllCategoriesAction = () => async (dispatch) => {
    try {
        dispatch({ type: categoryConstants.GET_ALL_CATEGORIES_REQUEST });
        const response = await categoryApis.getCategoriesService();
        dispatch({ type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, categoryConstants.GET_ALL_CATEGORIES_FAIL);
    }
}

//create new category action
export const createCategoryAction = (category) => async (dispatch, getState) => {
    try {
        dispatch({ type: categoryConstants.CREATE_CATEGORY_REQUEST });
        const response = await categoryApis.createCategoryService(category, tokenProtection(getState));
        toast.success("Category Created Successfully");
        dispatch({ type: categoryConstants.CREATE_CATEGORY_SUCCESS, action: response });
        dispatch(getAllCategoriesAction())
    } catch (error) {
        ErrorsAction(error, dispatch, categoryConstants.CREATE_CATEGORY_FAIL);
    }
}

//update category action
export const updateCategoryAction = (id, category) => async (dispatch, getState) => {
    try {
        dispatch({ type: categoryConstants.UPDATE_CATEGORY_REQUEST });
        const response = await categoryApis.updateCategoryService(id, category, tokenProtection(getState));
        toast.success("Category Updated Successfully");
        dispatch({ type: categoryConstants.UPDATE_CATEGORY_SUCCESS, payload: response });
        dispatch(getAllCategoriesAction())
    } catch (error) {
        ErrorsAction(error, dispatch, categoryConstants.UPDATE_CATEGORY_FAIL);
    }
}

//delete category action
export const deleteCategoryAction = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: categoryConstants.DELETE_CATEGORY_REQUEST });
        const response = await categoryApis.deleteCategoryService(id, tokenProtection(getState));
        dispatch({ type: categoryConstants.DELETE_CATEGORY_SUCCESS, action: response });
        dispatch(getAllCategoriesAction())
    } catch (error) {
        ErrorsAction(error, dispatch, categoryConstants.DELETE_CATEGORY_FAIL);
    }
}