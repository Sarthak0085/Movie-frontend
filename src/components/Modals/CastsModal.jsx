import React, { useEffect, useState } from 'react'
import MainModal from './MainModal'
import { Input } from '../Inputs'
import Uploader from '../Uploader';
import ImagePreview from '../ImagePreview';
import { useDispatch } from 'react-redux';
import { addCastsAction, updateCastAction } from '../../redux/actions/moviesAction';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { castValidation } from '../Validation/MovieValidation';
import { toast } from 'react-toastify';
import { InlineError } from '../Notification/Error';

const CastsModal = ({ modalOpen, setModalOpen, cast }) => {
    console.log(cast);
    const [imageUrl, setImageUrl] = useState("");

    const dispatch = useDispatch();
    const castImage = imageUrl ? imageUrl : cast?.image;
    const generatedId = Math.floor(Math.random() * 1000000);

    // validate cast
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(castValidation)
    })

    const onSubmit = (data) => {
        console.log(data);
        if (cast) {
            dispatch(updateCastAction({
                ...data,
                image: castImage,
                id: cast?.id
            }))
            toast.success("Cast updated Successfully");
        } else {
            dispatch(addCastsAction({
                ...data,
                image: castImage,
                id: generatedId,
            }))
            toast.success("Cast created Successfully");

        }
        reset();
        setImageUrl("");
        setModalOpen(false)
    }

    useEffect(() => {
        if (cast) {
            setValue("name", cast?.name);
        }
    }, [setValue, cast])

    return (
        <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <div className='inline-block sm:w-4/5 md:w-3/5 lg:w-2/5 w-full p-10 overflow-y-auto h-full bg-main text-white border align-middle border-bordershadow-xl rounded-2xl'>
                <h2 className='text-3xl font-bold'>{cast ? "Update" : "Create"} Cast</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col text-left gap-6 mt-6'>
                    <div className='w-full'>
                        <Input
                            type="text"
                            placeholder={"Shahid Kapoor"}
                            label="Cast Name"
                            name="name"
                            bg={false}
                            register={register("name")}
                        />
                        {errors.name && <InlineError text={errors.name.message} />}
                    </div>
                    <div className="flex z-40 flex-col gap-2">
                        <p className="text-sm font-semibold text-border">
                            Cast Image
                        </p>
                        <Uploader setImageUrl={setImageUrl} />
                        <ImagePreview image={castImage} name='Cast Image' />
                        {/* <div className="h-32 w-32 p-2 bg-main border border-border rounded">
                          <img 
                              src={ cast ? cast.image : "1.jpg"}
                              alt="Movie Image"
                              className="w-full h-full object-cover rounded"
                          />
                      </div> */}
                    </div>
                    <button
                        type="submit"
                        className='w-full flex-column z-40 py-3 font-bold text-lg transitions hover:bg-transparent rounded border-2 border-subMain bg-subMain text-white'>
                        {cast ? "Update" : "Add"}
                    </button>
                </form>
            </div>
        </MainModal>
    )
}

export default CastsModal