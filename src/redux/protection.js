import { logoutAction } from "./actions/userAction";

export const ErrorsAction = (error, dispatch, action) => {
    const message = error.response && error.response?.data.message ? error.response.data.message : error.message;
    if (message === "Not Authorized") {
        dispatch(logoutAction());
    }
    return dispatch({ type: action, payload: message });
}

export const tokenProtection = (getState) => {
    console.log("hello");

    const { userLogin } = getState();
    const userInfo = userLogin.userInfo;
    if (!userInfo.token) {
        console.log("bye");

        return null;
    }
    console.log(userInfo?.token);

    return userInfo?.token;
}