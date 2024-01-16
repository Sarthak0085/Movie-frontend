import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import { IoMdCloudUpload } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ImagePreview from "../../../components/ImagePreview";
import { Input, Message, Select } from "../../../components/Inputs";
import CastsModal from "../../../components/Modals/CastsModal";
import { InlineError } from "../../../components/Notification/Error";
import Uploader from "../../../components/Uploader";
import { movieValidation } from "../../../components/Validation/MovieValidation";
import { createMovieAction, removeCastAction } from "../../../redux/actions/moviesAction";
import Sidebar from "../Sidebar";


const AddMovie = () => {
    const [openModal, setOpenModal] = useState(false);
    const [cast, setCast] = useState("");
    const [imageWithoutTitle, setImageWithoutTitle] = useState("");
    const [imageWithTitle, setImageWithTitle] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { categories } = useSelector((state) => state.getAllCategories);
    const { isLoading, isSuccess, isError } = useSelector((state) => state.createMovie);
    const { casts } = useSelector((state) => state.casts);

    console.log(casts);


    // validate movie
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(movieValidation)
    })

    useEffect(() => {
        if (openModal === false) {
            setCast("");
        }

        if (isSuccess) {
            reset({
                name: "",
                desc: "",
                category: "",
                language: "",
                time: 0,
                year: 0,
            });
            setImageWithTitle("");
            setImageWithoutTitle("");
            setVideoUrl("");
            dispatch({ type: "CREATE_MOVIE_RESET" });
            navigate("/add-movie");
        }

        if (isError) {
            toast.error(isError);
        }

    }, [openModal, isError, isSuccess, dispatch, navigate, reset])

    const deleteCastHandler = (id) => {
        dispatch(removeCastAction(id));
        toast.success("Cast deleted Successfully!!!")
    }

    const onSubmit = (data) => {
        console.log({
            ...data,
            imageWithTitle: imageWithTitle,
            imageWithoutTitle: imageWithoutTitle,
            videoUrl: videoUrl,
            casts
        });
        dispatch(createMovieAction({ ...data, video: videoUrl, titleImage: imageWithTitle, image: imageWithoutTitle, casts }))
    }

    console.log(categories);


    return (
        <Sidebar>
            <CastsModal modalOpen={openModal} setModalOpen={setOpenModal} cast={cast} />
            <div className="flex flex-col gap-6">
                <h2 className="text-xl font-bold">Add Movie</h2>
                <div className="w-full grid md:grid-cols-2 gap-6">
                    {/* Movie Title  */}
                    <div className="w-full">
                        <Input
                            type="text"
                            placeholder="Jab we Met"
                            label="Movie Title"
                            bg={true}
                            name="name"
                            register={register("name")}
                        />
                        {errors.name && <InlineError text={errors.name.message} />}
                    </div>
                    {/* Time  */}
                    <div className="w-full">
                        <Input
                            type="text"
                            placeholder="2 hr"
                            label="Time (in Hours)"
                            bg={true}
                            name="time"
                            register={register("time")}
                        />
                        {errors.time && <InlineError text={errors.time.message} />}
                    </div>
                </div>
                {/* Description  */}
                <div className="w-full">
                    <Message
                        label="Description"
                        placeholder="Make a short and precise for easy understanding"
                        name="desc"
                        admin={true}
                        register={register("desc")}
                    />
                    {errors.desc && <InlineError text={errors.desc.message} />}
                </div>
                <div className="w-full grid md:grid-cols-2 gap-6">
                    {/* Language  */}
                    <div className="w-full">
                        <Input
                            type="text"
                            placeholder="Hindi"
                            label="Language"
                            bg={true}
                            name="language"
                            register={register("language")}
                        />
                        {errors.language && <InlineError text={errors.language.message} />}
                    </div>
                    {/* Year  */}
                    <div className="w-full">
                        <Input
                            type="number"
                            placeholder="2007"
                            label="Year (release year)"
                            bg={true}
                            name="year"
                            register={register("year")}
                        />
                        {errors.year && <InlineError text={errors.year.message} />}
                    </div>
                </div>
                {/* Images  */}
                <div className="w-full grid md:grid-cols-2 gap-6">
                    {/* Image without Title  */}
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-semibold text-border">
                            Image without Title
                        </p>
                        <Uploader setImageUrl={setImageWithoutTitle} />
                        <ImagePreview image={imageWithoutTitle} name="Image Without Title" />
                    </div>
                    {/* Image with title  */}
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-semibold text-border">
                            Image with Title
                        </p>
                        <Uploader setImageUrl={setImageWithTitle} />
                        <ImagePreview image={imageWithTitle} name="Image with Title" />
                    </div>
                </div>
                {/* Category  */}
                <div className="text-sm w-full">
                    <Select
                        label="Movie Category"
                        options={categories?.length > 0 ? categories : []}
                        name="category"
                        register={register("category")}
                    />
                    {errors.category && <InlineError text={errors.category.message} />}
                </div>

                {/* Movie Video  */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-border">
                        Movie Video
                    </label>
                    <div className={`w-full grid ${videoUrl && "md:grid-cols-2"} gap-6`}>
                        {
                            videoUrl && (
                                <div className="w-full bg-main text-sm text-subMain py-4 border border-border rounded flex-column">
                                    <video controls autoPlay={true} className="w-full h-full rounded">
                                        <source src={videoUrl || ""} type="video/mp4" />
                                    </video>
                                </div>
                            )
                        }
                        <Uploader setImageUrl={setVideoUrl} />
                    </div>
                </div>

                {/* Casts  */}
                <div className="w-full grid lg:grid-cols-2 gap-6 items-start">
                    <button
                        onClick={() => {
                            setOpenModal(true)
                        }}

                        className="w-full py-4 bg-main border border-subMain border-dashed text-white rounded">
                        Add Cast
                    </button>
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                        {
                            casts?.length > 0 &&
                            casts?.map((cast) => (
                                <div key={cast?.id} className="text-sm p-2 italic text-text rounded flex-column bg-main border border-border">
                                    <img
                                        src={cast?.image ? cast?.image : "1.jpg"}
                                        alt={cast?.name}
                                        className="w-full h-24 rounded object-cover mb-2"
                                    />
                                    <p>{cast?.name}</p>
                                    <div className="flex-rows mt-2 w-full gap-2">
                                        <button
                                            onClick={() => {
                                                setCast(cast);
                                                setOpenModal(true)
                                            }}
                                            className="w-6 h-6 flex-column bg-dry border border-border text-green-600 rounded">
                                            <FiEdit />
                                        </button>
                                        <button
                                            onClick={() => deleteCastHandler(cast?.id)}
                                            className="w-6 h-6 flex-column bg-dry border border-border text-subMain rounded">
                                            <MdDelete />
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <button
                    onClick={handleSubmit(onSubmit)}
                    disabled={isLoading || !imageWithTitle || !imageWithoutTitle || !videoUrl}
                    className={`bg-subMain flex-rows gap-6 text-white w-full py-4 ${(isLoading || !imageWithTitle || !imageWithoutTitle || !videoUrl) && "cursor-not-allowed"}`}>
                    {
                        isLoading ? "Please Wait...." :
                            <>
                                <IoMdCloudUpload /> Publish
                            </>
                    }

                </button>
            </div>
        </Sidebar>
    )
}

export default AddMovie;