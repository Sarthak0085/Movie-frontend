import { FiDownload, FiEdit } from 'react-icons/fi';
import { GoEye } from "react-icons/go";
import { Link } from 'react-router-dom';

const Table = ({ data, admin, Icon, deleteHandler }) => {

    const Head = "text-sm text-center text-main font-semibold px-6 py-2 uppercase";
    const Text = "text-md text-center whitespace-nowrap leading-6 px-5 py-3";


    return (
        <div className='overflow-x-scroll overflow-hidden w-full relative'>
            <table className='w-full table-auto border border-border divide-y divide-border '>
                <thead className='bg-dryGray'>
                    <th scope='col' className={Head}>
                        Image
                    </th>
                    <th scope='col' className={Head}>
                        Name
                    </th>
                    <th scope='col' className={Head}>
                        Category
                    </th>
                    <th scope='col' className={Head}>
                        Language
                    </th>
                    <th scope='col' className={Head}>
                        Year
                    </th>
                    <th scope='col' className={Head}>
                        Time
                    </th>
                    <th scope='col' className={Head}>
                        Rating
                    </th>
                    <th scope='col' className={Head}>
                        Actions
                    </th>
                </thead>
                <tbody className='bg-main divide-y divide-gray-800'>
                    {
                        data && data.map((movie, index) =>
                        (
                            <tr key={index}>
                                <td className={Text}>
                                    <div className='w-12 bg-dry border border-border h-12 rounded-full overflow-hidden'>
                                        <img
                                            src={movie?.image ? movie?.image : ""}
                                            alt={movie?.name}
                                            className='w-full h-full rounded-full object-cover'
                                        />
                                    </div>
                                </td>
                                <td className={`${Text} truncate`}>{movie?.name}</td>
                                <td className={Text}>{movie?.category}</td>
                                <td className={Text}>{movie?.language}</td>
                                <td className={Text}>{movie?.year}</td>
                                <td className={Text}>{movie?.time} hr</td>
                                <td className={Text}>{movie?.rating}</td>
                                <td className={`${Text} space-x-4`}>
                                    {
                                        admin ? (
                                            <>
                                                <button className='font-medium transitions text-white hover:text-subMain'>
                                                    <Link to={`/movie/${movie?._id}`}>
                                                        <GoEye size={22} />
                                                    </Link>
                                                </button>
                                                <button>
                                                    <Link to={`/edit/${movie?._id}`} className='font-medium transitions text-green-500'>
                                                        <FiEdit size={23} />
                                                    </Link>
                                                </button>
                                                <button
                                                    onClick={() => deleteHandler(movie?._id)}
                                                    className='font-medium transitions  text-subMain'>
                                                    <Icon size={23} />
                                                </button>
                                            </>
                                        ) :
                                            <>

                                                <button className='font-medium transitions text-white hover:text-subMain'>
                                                    <Link to={`/movie/${movie?._id}`}>
                                                        <GoEye size={22} />
                                                    </Link>
                                                </button>
                                                <button className='font-medium transitions text-blue-500'>
                                                    <FiDownload size={23} />
                                                </button>
                                                <button
                                                    onClick={() => deleteHandler(movie?._id)}
                                                    className='transitions text-subMain'>
                                                    <Icon size={23} />
                                                </button>
                                            </>

                                    }

                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table