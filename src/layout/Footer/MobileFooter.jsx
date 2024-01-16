import { BsCollectionPlay } from "react-icons/bs";
import { CgMenuBoxed } from "react-icons/cg";
import { FiHeart, FiUserCheck } from "react-icons/fi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const MobileFooter = () => {

    const active = "bg-white !text-main";
    const inActive = "transitions text-2xl flex-column hover:bg-white hover:text-main text-white rounded-md px-4 py-3";
    const Hover = ({ isActive }) => isActive ? `${active} ${inActive}` : `${inActive}`;
    const { likedMovies } = useSelector((state) => state.getUserAllFavouritesMovie);


    return (
        <>
            <div className="w-full flex-btn h-full bg-white rounded cursor-pointer overflow-y-scroll flex-grow">
                {/* Drawer  */}
            </div>
            <footer className="lg:hidden fixed z-50 bottom-0 border-t-2 w-full px-1">
                <div className="bg-dry flex-btn w-full p-2 rounded-md">
                    <NavLink to={"/movies"} className={Hover}>
                        <BsCollectionPlay />
                    </NavLink>
                    <NavLink to="/favourites" className={Hover}>
                        <div className="relative">
                            <div className='absolute w-5 h-5 flex-column rounded-full text-sm bg-subMain -top-3 text-white -right-3'>
                                {likedMovies?.length || 0}
                            </div>
                            <FiHeart />
                        </div>
                    </NavLink>
                    <NavLink to={"/login"} className={Hover}>
                        <FiUserCheck />
                    </NavLink>
                    <button className={inActive}>
                        <CgMenuBoxed />
                    </button>
                </div>
            </footer>
        </>
    )
}

export default MobileFooter