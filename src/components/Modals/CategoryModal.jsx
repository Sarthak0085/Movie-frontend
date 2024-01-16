import React, { useEffect, useState } from 'react'
import MainModal from './MainModal'
import { Input } from '../Inputs'
import { useDispatch, useSelector } from 'react-redux';
import { createCategoryAction, updateCategoryAction } from '../../redux/actions/categoryAction';
import { toast } from 'react-toastify';

const CategoryModal = ({ modalOpen, setModalOpen, category }) => {

    const [title, setTitle] = useState("");
    const dispatch = useDispatch();

    const { isLoading, isError, isSuccess } = useSelector((state) => state.adminCreateCategory);
    const { isLoading: updateLoading, isError: updateError, isSuccess: updateSuccess } = useSelector((state) => state.adminUpdateCategory);

    const submitHandler = (e) => {
        e.preventDefault();
        if (title && title.trim()) {
            if (category) {
                dispatch(updateCategoryAction(category?._id, { title: title }));
                setModalOpen(false);
            } else {
                dispatch(createCategoryAction({ title: title }));
                setModalOpen(false);
            }
        } else {
            toast.error("Category Name can't be empty");
        }
    }

    useEffect(() => {
        if (isError || updateError) {
            toast.error(isError || updateError);
            dispatch({ type: isError ? "CREATE_CATEGORY_RESET" : "UPDATE_CATEGORY_RESET" });
        }

        if (isSuccess || updateSuccess) {

            // toast.success(isSuccess ? "Category Created Successfully" : "Category Updated Successfully");
            dispatch({ type: isError ? "CREATE_CATEGORY_RESET" : "UPDATE_CATEGORY_RESET" });
        }

        if (category) {
            setTitle(category?.title);
        }

        if (modalOpen === false) {
            setTitle("");
        }
    }, [isError, updateError, isSuccess, updateSuccess, dispatch, category, modalOpen])

    return (
        <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <div className='inline-block sm:w-4/5 md:w-3/5 lg:w-2/5 w-full p-10 overflow-y-auto h-full bg-main text-white border align-middle border-border'>
                <h2 className='text-3xl font-bold'>{category ? "Update" : "Create"} Category</h2>
                <form
                    onSubmit={submitHandler}
                    className='flex flex-col text-left gap-6 mt-6'>
                    <Input
                        type="text"
                        placeholder={"Action"}
                        label="Category Name"
                        bg={false}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <div className='w-full z-40 md:flex flex-row-reverse items-center gap-5 justify-between'>
                        {/* <button
                      onClick={() =>setModalOpen(false)}
                      className='w-full flex-column py-3 md:mb-0 mb-7 font-bold text-lg hover:bg-transparent rounded border-2 border-subMain bg-subMain text-white'>
                      Cancel
                  </button> */}
                        <button
                            type='submit'
                            className='w-full  flex-column py-3 mb-7 md:mb-0 font-bold text-lg hover:bg-transparent rounded border-2 border-subMain bg-subMain text-white'>
                            {
                                isLoading || updateLoading ? "Loading..." : category ? "Update" : "Add"
                            }
                        </button>
                    </div>
                </form>
            </div>
        </MainModal>
    )
}

export default CategoryModal