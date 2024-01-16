import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUploadCloud } from 'react-icons/fi'
import Loader from './Notification/Loader';
import { uploadImageService } from '../redux/APIs/uploadImageService';
import { toast } from 'react-toastify';
import PropTypes from "prop-types";

const Uploader = ({ setImageUrl }) => {

    const [isLoading, setIsLoading] = useState(false);

    //upload file 
    const onDrop = useCallback(
        async (acceptedFiles) => {
            const file = new FormData();
            file.append("file", acceptedFiles[0]);
            const data = await uploadImageService(file, setIsLoading);
            if (data) {
                toast.success("Image Upload Successfully");
            }
            else {
                toast.error("Something went wrong");
            }
            console.log(data);

            setImageUrl(data);
        }
        , [setImageUrl])

    const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
        multiple: false,
        onDrop
    })
    return (
        <div className='w-full text-center flex-column gap-6'>
            {
                isLoading ?
                    (
                        <div className='px-6 w-full py-8 border-3 border-border border-dashed bg-dry rounded-md'>
                            <Loader />
                        </div>
                    )
                    :
                    (
                        <div
                            {...getRootProps()}
                            className='px-6 w-full py-8 border-3 border-border border-dashed bg-main rounded-md cursor-pointer'
                        >
                            <input {...getInputProps()} />
                            <span className='text-3xl mx-auto flex-column text-subMain'>
                                <FiUploadCloud />
                            </span>
                            <p className='text-sm mt-2'>Drop your image/video file here</p>
                            <em className='text-xs text-border'>
                                {
                                    isDragActive ? "It's not good you can change it again"
                                        : isDragReject ? "Unsupported file format"
                                            : "(Only .jpg and .png files will be accepted)"
                                }

                            </em>
                        </div>
                    )
            }

        </div>
    )
}

Uploader.propTypes = {
    setImageUrl: PropTypes.func.isRequired,
};

export default Uploader