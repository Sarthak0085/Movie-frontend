import { BsFillGridFill } from "react-icons/bs";
import { FaHeart, FaListAlt, FaUsers } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { HiViewGridAdd } from "react-icons/hi";
import { RiLockPasswordLine, RiLogoutCircleLine, RiMovie2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../../layout/Layout";
import { logoutAction } from "../../redux/actions/userAction";


const Sidebar = ({ children }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { userInfo } = useSelector((state) => state.userLogin);

    const logout = () => {
        dispatch(logoutAction());
        navigate("/");
        toast.success("Logged out successful");
        window.location.reload();
    }

    const SideLinks = userInfo && userInfo?.user?.isAdmin ? (
        [
            {
                name: "Dashboard",
                link: "/dashboard",
                icon: BsFillGridFill,
            },
            {
                name: "Movie List",
                link: "/movieslist",
                icon: FaListAlt,
            },
            {
                name: "Add Movie",
                link: "/add-movie",
                icon: RiMovie2Fill,
            },
            {
                name: "Categories",
                link: "/categories",
                icon: HiViewGridAdd,
            },
            {
                name: "Users",
                link: "/users",
                icon: FaUsers,
            },
            {
                name: "Update Profile",
                link: "/profile",
                icon: FiSettings,
            },
            {
                name: "Favourites Movies",
                link: "/favourites",
                icon: FaHeart,
            },
            {
                name: "Update Password",
                link: "/password",
                icon: RiLockPasswordLine,
            },
        ]
    ) : userInfo && (
        [
            {
                name: "Update Profile",
                link: "/profile",
                icon: FiSettings,
            },
            {
                name: "Favourites Movies",
                link: "/favourites",
                icon: FaHeart,
            },
            {
                name: "Update Password",
                link: "/password",
                icon: RiLockPasswordLine,
            },
        ]
    );

    const active = "bg-dryGray text-subMain";
    const hover = "hover:text-white hover:bg-main";
    const inActive = "rounded font-medium text-sm transitions flex gap-3 items-center p-4";
    const Hover = ({ isActive }) => isActive ? `${active} ${inActive}` : `${hover} ${inActive}`;

    return (
        <Layout>
            <div className="min-h-screen container mx-auto px-2">
                <div className="xl:grid grid-cols-8 gap-10 items-start md:py-12 py-6">
                    <div className="col-span-2 sticky bg-dry border border-gray-800 p-6 rounded-md xl:mb-0 mb-5">
                        {
                            SideLinks.map((link) => (
                                <NavLink to={link.link} key={link.name} className={Hover}>
                                    <link.icon /><p>{link.name}</p>
                                </NavLink>
                            ))
                        }
                        <button onClick={logout} className={`${inActive} ${hover} w-full`}>
                            <RiLogoutCircleLine /> Log Out
                        </button>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="10"
                        data-aos-offset="200"
                        className="col-span-6 rounded-md bg-dry border border-gray-800 p-6">
                        {children}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Sidebar