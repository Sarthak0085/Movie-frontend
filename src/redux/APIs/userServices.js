import Axios from "./Axios";

//register service
export const registerService = async (user) => {
    const { data } = await Axios.post("/users", user);

    if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
    }

    return data;
}

// login service
export const loginService = async (user) => {
    const { data } = await Axios.post("/users/login", user);

    if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
    }

    return data;
}

//logout service
export const logoutService = async () => {
    localStorage.removeItem("userInfo");
    return null;
}

// update profile service
export const updateProfileService = async (user, token) => {
    const { data } = await Axios.put("/users/", user, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
        console.log('User info updated in localStorage:', localStorage.getItem("userInfo"));
    }

    return data;
}

// delete profile service
export const deleteUserProfileService = async (token) => {
    const { data } = await Axios.delete("/users", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (data) {
        localStorage.removeItem("userInfo");
    }

    return data;
}

// change password service
export const changeUserPasswordProfile = async (passwords, token) => {
    const { data } = await Axios.put("/users/password", passwords, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    console.log(data);
    return data;
}

// change password service
export const getFavouriteMoviesService = async (token) => {
    const { data } = await Axios.get("/users/favourites", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    console.log(data);
    return data;

}

// delete all favourite service
export const deleteAllFavouritesMoviesService = async (token) => {
    const { data } = await Axios.delete("/users/favourites", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    console.log(data);
    return data;
}

// delete all favourite service
export const likeMovieService = async (movieId, token) => {
    const { data } = await Axios.put("/users/favourites", movieId, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    console.log(data);
    return data;
}

// get all users by admin
export const getAllUsersSevice = async (token) => {
    const { data } = await Axios.get("/users", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    console.log(data);
    return data;
}

// delete user by admin
export const deleteUserByIdService = async (id, token) => {
    const { data } = await Axios.delete(`/users/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    console.log(data);
    return data;
}