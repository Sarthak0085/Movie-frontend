import Aos from "aos"
import { useDispatch, useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import ScrollOnTop from "./components/ScrollOnTop"
import About from "./pages/About"
import Contact from "./pages/Contact"
import AddMovie from "./pages/Dashboard/Admin/AddMovie"
import Categories from "./pages/Dashboard/Admin/Categories"
import Dashboard from "./pages/Dashboard/Admin/Dashboard"
import MovieLists from "./pages/Dashboard/Admin/MovieList"
import Users from "./pages/Dashboard/Admin/Users"
import Favourites from "./pages/Dashboard/Favourites"
import ChangePassword from "./pages/Dashboard/Password"
import Profile from "./pages/Dashboard/Profile"
import Home from "./pages/Home"
import LoginPage from "./pages/Login"
import MoviesPage from "./pages/Movies"
import NotFound from "./pages/NotFound"
import Register from "./pages/Register"
import SingleMoviePage from "./pages/SingleMovie"
import { AdminProtectedRoute, ProtectedRoute } from "./ProtectedRoutes"
import { useEffect } from "react"
import WatchPage from "./pages/WatchPage"
import { getAllMoviesAction } from "./redux/actions/moviesAction"
import { getUserAllFavouritesMovieAction } from "./redux/actions/userAction"
import { toast } from "react-toastify"
import { getAllCategoriesAction } from "./redux/actions/categoryAction"
import EditMovie from "./pages/Dashboard/Admin/EditMovie"

function App() {
  Aos.init();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { isError, isSuccess } = useSelector((state) => state.userLikeMovie);
  const { isError: catError } = useSelector((state) => state.getAllCategories);

  useEffect(() => {
    dispatch(getAllCategoriesAction());
    dispatch(getAllMoviesAction({}));
    if (userInfo) {
      dispatch(getUserAllFavouritesMovieAction());
    }

    if (isError || catError) {
      toast.error(isError || catError);
      dispatch({ type: "LIKE_MOVIE_RESET" })
    }

    if (isSuccess) {
      dispatch({ type: "LIKE_MOVIE_RESET" })
    }

  }, [])

  return (
    <ScrollOnTop>
      <Routes>
        {/* Public Routes  */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:search" element={<MoviesPage />} />
        <Route path="/movie/:id" element={<SingleMoviePage />} />
        <Route path="/watch/:id" element={<WatchPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />

        {/* Private Routes  */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/password" element={<ChangePassword />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route element={<AdminProtectedRoute />}>
            <Route path="/movieslist" element={<MovieLists />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/users" element={<Users />} />
            <Route path="/add-movie" element={<AddMovie />} />
            <Route path="/edit/:id" element={<EditMovie />} />
          </Route>
        </Route>

      </Routes>
    </ScrollOnTop>
  )
}

export default App
