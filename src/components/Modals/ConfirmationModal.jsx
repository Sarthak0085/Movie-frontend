import { useDispatch, useSelector } from "react-redux";
import MainModal from "./MainModal";
import { toast } from "react-toastify";
import { useEffect } from "react";

const ConfirmationModal = ({ open, setOpen, handleDelete, isLoading }) => {

    const dispatch = useDispatch();
    const { isError, isSuccess, message } = useSelector((state) => state.adminDeleteCategory);

    // const handleDelete = () => {

    // }

    useEffect(() => {
        if (isSuccess) {
            toast.success("Category Deleted Successfully");
            dispatch({ type: "DELETE_CATEGORY_RESET" })
        }

        if (isError) {
            toast.error(isError);
            dispatch({ type: "DELETE_CATEGORY_RESET" })
        }
    }, [dispatch, isError, isSuccess, message])


    return (
        <MainModal modalOpen={open} setModalOpen={setOpen} >
            <div className="w-[90%] h-[300px] md:w-[500px] bg-gray-700 flex-column items-center justify-center">
                <h2 className="text-white font-bold text-2xl">Are You sure you want to delete</h2>
                <div className="w-full md:flex items-center justify-between md:px-12 px-4 py-6 ">
                    <button
                        onClick={() => setOpen(false)}
                        disabled={isLoading}
                        className="bg-gray-400 w-[100px] py-2 text-white border border-border hover:bg-gray200 font-semibold rounded-md text-center uppercase">
                        Cancel
                    </button>
                    <button
                        onClick={handleDelete}
                        disabled={isLoading}
                        className="bg-subMain  w-[100px] py-2 text-white border border-subMain hover:bg-main font-semibold rounded-md text-center uppercase">
                        delete
                    </button>
                </div>
            </div>
        </MainModal>
    )
}

export default ConfirmationModal