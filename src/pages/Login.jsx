import { Link, useNavigate } from "react-router-dom"
import { Input } from "../components/Inputs"
import Layout from "../layout/Layout"
import { FiLogIn } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form";
import { LoginValidation } from "../components/Validation/UserValidation"
import { yupResolver } from "@hookform/resolvers/yup";
import { InlineError } from "../components/Notification/Error"
import { loginAction } from "../redux/actions/userAction"
import { useEffect } from "react"
import { toast } from "react-toastify"

const LoginPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, isSuccess, isError, userInfo } = useSelector((state) => state.userLogin);

    // validate user
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(LoginValidation)
    })

    const onSubmit = (data) => {
        console.log(data);
        dispatch(loginAction(data));
    }

    useEffect(() => {

        if (userInfo?.isAdmin) {
            navigate("/dashboard");
        } else if (userInfo) {
            navigate("/profile");
        }

        if (isSuccess) {
            console.log(isSuccess);
            toast.success(`Welcome back ${userInfo?.user?.userName}`);
        }
        if (isError) {
            console.log(isError);
            toast.error(isError);
            dispatch({ type: "USER_LOGIN_RESET" });
        }
    }, [userInfo, isSuccess, isError, dispatch, navigate])

    return (
        <Layout>
            <div className="container mx-auto px-2 my-24 flex-column">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full 2xl:w-2/5 gap-8 flex flex-col justify-center p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border">
                    <img
                        src="1.jpg"
                        alt="logo"
                        className="w-full h-12 object-contain"
                    />
                    <div className="w-full">
                        <Input
                            type="email"
                            placeholder="movix@gmail.com"
                            name="email"
                            register={register("email")}
                            label="Email"
                            bg={true}
                        />
                        {
                            errors.email && <InlineError text={errors.email.message} />
                        }
                    </div>
                    <div className="w-full">
                        <Input
                            type="password"
                            placeholder="***********"
                            name="password"
                            register={register("password")}
                            label="Password"
                            bg={true}
                        />
                        {
                            errors.password && <InlineError text={errors.password.message} />
                        }
                    </div>

                    <Link to={"/forgot-password"} className="text-dryGray underline ">
                        Forgot Password
                    </Link>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`bg-subMain transitions hover:bg-main flex-rows gap-4 text-white rounded-lg p-4 w-full ${isLoading && "cursor-not-allowed"}`}
                    >
                        <FiLogIn /> Login
                    </button>
                    <p className="text-center text-border">
                        Don't have an Account? <Link to={"/register"} className="text-dryGray font-semibold ml-2">Sign Up &rarr;</Link>
                    </p>
                </form>
            </div>
        </Layout>
    )
}

export default LoginPage;