import { useDispatch, useSelector } from "react-redux";
import { Input } from "../../components/Inputs"
import Uploader from "../../components/Uploader"
import Sidebar from "./Sidebar"
import { useNavigate } from "react-router-dom";
import { InlineError } from "../../components/Notification/Error";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UpdateProfileValidation } from "../../components/Validation/UserValidation";
import { deleteProfileAction, updateProfileAction } from "../../redux/actions/userAction";
import ImagePreview from "../../components/ImagePreview";
// import ConfirmationModal from "../../components/Modals/ConfirmationModal";

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { userInfo } = useSelector((state) => state.userLogin);
    const { isLoading, isSuccess, isError } = useSelector((state) => state.updateUserProfile);
    const { isLoading: DeleteLoading, isSuccess: DeleteSuccess, isError: DeleteError } = useSelector((state) => state.deleteUserProfile);

    const [imageUrl, setImageUrl] = useState(userInfo?.user?.image);
    // const [open, setOpen] = useState(false);



    // validate user
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(UpdateProfileValidation)
    })

    const onSubmit = (data) => {
        console.log(data);
        dispatch(updateProfileAction({ ...data, image: imageUrl }));
    }

    const deleteProfile = () => {
        console.log("delete");
        if (window.confirm("Are you sure you want to delete this profile?")) {
            dispatch(deleteProfileAction());
            // navigate("/login")
        }
    }

    useEffect(() => {

        if (userInfo) {
            setValue("firstName", userInfo?.user?.firstName);
            setValue("lastName", userInfo?.user?.lastName);
            setValue("userName", userInfo?.user?.userName);
            setValue("age", userInfo?.user?.age);
            setValue("email", userInfo?.user?.email);
        }

        if (isSuccess) {
            console.log(isSuccess);
            console.log(userInfo?.user?.userName);

            toast.success(`User ${userInfo?.user?.userName} updated successfully`);
            dispatch({ type: "USER_UPDATE_PROFILE_RESET" });
        }
        if (DeleteSuccess) {
            navigate("/login");
            toast.success("Profile deleted successfully");
            dispatch({ type: "USER_DELETE_PROFILE_RESET" });
        }
        if (DeleteError || isError) {
            console.log(DeleteError);
            toast.error(DeleteError);
        }
    }, [userInfo, isSuccess, isError, setValue, dispatch, navigate, DeleteError, DeleteSuccess]);

    return (
        <>
            {/* <ConfirmationModal setOpen={setOpen} handleDelete={deleteProfile} isLoading={DeleteLoading} /> */}
            <Sidebar>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                    <h2 className="text-xl font-bold">Update Profile</h2>
                    <div className="w-full grid lg:grid-cols-12 gap-6">
                        <div className="col-span-10">
                            <Uploader setImageUrl={setImageUrl} />
                        </div>
                        {/* image preview  */}
                        <div className="col-span-2">
                            <ImagePreview
                                name={userInfo ? userInfo?.user?.userName : "Profile"}
                                image={imageUrl}
                            />
                        </div>
                    </div>
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
                            readOnly
                            type="number"
                            placeholder="19"
                            register={register("age")}
                            name="age"
                            label="Age"
                            bg={true}
                        />
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
                    <div className="flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4">
                        <button
                            onClick={deleteProfile}
                            disabled={DeleteLoading || DeleteError}
                            className={`bg-subMain hover:bg-main text-white transitions border border-subMain w-full py-3 px-6 sm:w-auto ${DeleteLoading && "cursor-not-allowed"}`}>
                            Delete Account
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading || isError}
                            className={`bg-main hover:bg-subMain text-white transitions border border-subMain w-full py-3 px-6 sm:w-auto ${isLoading || isError && "cursor-not-allowed"}`}>
                            Update Profile
                        </button>
                    </div>
                </form>
            </Sidebar>
        </>
    )
}

export default Profile