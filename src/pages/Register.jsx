import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { FiLogIn } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { Input } from "../components/Inputs"
import { InlineError } from "../components/Notification/Error"
import { RegisterValidation } from "../components/Validation/UserValidation"
import Layout from "../layout/Layout"
import { registerAction } from "../redux/actions/userAction"

const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, isSuccess, isError, userInfo } = useSelector((state) => state.userLogin);

    // validate user
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(RegisterValidation)
    })

    const onSubmit = (data) => {
        console.log(data);
        dispatch(registerAction(data));
    }

    useEffect(() => {
        if (isSuccess) {
            console.log(isSuccess);
            navigate("/login");
            toast.success(`Welcome to the Movix. Please login to access your Profile.`);
            dispatch({ type: "USER_REGISTER_RESET" });
        }
        if (isError) {
            console.log(isError);
            toast.error(isError);
            dispatch({ type: "USER_REGISTER_RESET" });
        }
    }, [userInfo, isSuccess, isError, dispatch, navigate]);

    return (
        <Layout>
            <div className="container mx-auto px-2 my-24 flex-column">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full 2xl:w-2/5 gap-8 flex-column p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border">
                    <img
                        src="1.jpg"
                        alt="logo"
                        className="w-full h-12 object-contain"
                    />
                    <div className="w-full">
                        <Input
                            type="text"
                            placeholder="John"
                            label="First Name"
                            name="firstName"
                            register={register("firstName")}
                            bg={true}
                        />
                        {
                            errors.firstName && <InlineError text={errors.firstName.message} />
                        }
                    </div>
                    <div className="w-full">
                        <Input
                            type="text"
                            placeholder="Doe"
                            label="Last Name"
                            name="lastName"
                            register={register("lastName")}
                            bg={true}
                        />
                        {
                            errors.lastName && <InlineError text={errors.lastName.message} />
                        }
                    </div>
                    <div className="w-full">
                        <Input
                            type="text"
                            placeholder="Jack"
                            label="User Name (By What name we call you)"
                            name="userName"
                            register={register("userName")}
                            bg={true}
                        />
                        {
                            errors.userName && <InlineError text={errors.userName.message} />
                        }
                    </div>
                    <div className="w-full">
                        <Input
                            type="number"
                            placeholder="19"
                            name="age"
                            register={register("age")}
                            label="Age (Please enter the original Age.Age can't be updated Later)"
                            bg={true}
                        />
                        {
                            errors.age && <InlineError text={errors.age.message} />
                        }
                    </div>
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
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`bg-subMain transitions hover:bg-main flex-rows gap-4 text-white rounded-lg p-4 w-full ${isLoading && "cursor-not-allowed"}`}
                    >
                        <FiLogIn /> Register
                    </button>
                    <p className="text-center text-border">
                        Already have an Account? <Link to={"/login"} className="text-dryGray font-semibold ml-2">Sign In &rarr;</Link>
                    </p>
                </form>
            </div>
        </Layout>
    )
}

export default Register;