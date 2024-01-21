import { useState } from "react";
import { CgUser } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const { likedMovies } = useSelector((state) => state.getUserAllFavouritesMovie);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const Hover = ({ isActive }) => (isActive ? "text-subMain" : "text-white hover:text-subMain text-medium transitions");

  const searchHandler = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/movies/${search}`);
      setSearch(search);
    } else {
      navigate('/movies');
    }
  }

  console.log("Hello :" + userInfo?.user?.likedMovies);


  return (
    <div className='bg-main shadow-md sticky z-20 top-0 border-b-[1px] border-gray-600'>
      <div className='container mx-auto py-6 px-8 gap-10 lg:grid grid-cols-7 justify-between items-center'>
        <div className='col-span-1 lg:block hidden'>
          <Link to={"/"}>
            <h2 className="text-2xl font-bold text-subMain shadow-xl line-through">
              CinéCraze
            </h2>
          </Link>
        </div>
        {/* Search form */}
        <div className='col-span-3 '>
          <form onSubmit={searchHandler} className='w-full text-sm bg-dryGray rounded flex-btn gap-4'>
            <button type='submit' className='flex-column bg-subMain w-12 h-12 rounded text-white'>
              <FaSearch />
            </button>
            <input
              type='search'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search movie or webseries'
              className='font-medium text-sm placeholder:text-border w-11/12 h-12 bg-transparent border-none text-black px-2'
            />
          </form>
        </div>
        {/* menu icons  */}
        <div className='col-span-3 hidden lg:flex xl:gap-14 2xl:gap-20 font-medium text-sm justify-between xl:justify-end items-center'>
          <NavLink to={"/movies"} className={Hover}>
            Movies
          </NavLink>
          <NavLink to={"/about-us"} className={Hover}>
            About Us
          </NavLink>
          <NavLink to={"/contact-us"} className={Hover}>
            Contact Us
          </NavLink>
          <NavLink to="/favourites" className={`${Hover} relative`}>
            <FiHeart className="w-6 h-6" />
            <div className='absolute w-5 h-5 flex-column rounded-full text-sm bg-subMain -top-3 text-white -right-3'>
              {
                likedMovies ? likedMovies.length : 0
              }
            </div>
          </NavLink>
          <NavLink to={
            userInfo ? userInfo?.isAdmin ? "/dashboard" : "/profile" : "/login"
          } className={Hover}>
            {
              userInfo ?
                <img
                  src={userInfo?.image ? userInfo?.image : "https://firebasestorage.googleapis.com/v0/b/movie-app-7992e.appspot.com/o/c9501ff3-b7f7-4491-bf60-9eee29e52d78.png?alt=media"}
                  alt={userInfo?.userName}
                  className="w-8 h-8 rounded-full object-cover border border-subMain"
                />
                :
                <CgUser className="w-8 h-8" />
            }
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar