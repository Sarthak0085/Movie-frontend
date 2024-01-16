/* eslint-disable react/prop-types */
import { FiEdit } from 'react-icons/fi';
import { MdEmail } from "react-icons/md";
import moment from "moment";

const Table2 = ({ data, users, onDeleteFunction, onEditFunction, Icon }) => {

    const Head = "text-sm text-center text-main font-semibold px-6 py-2 uppercase";
    const Text = "text-md text-center whitespace-nowrap leading-6 px-5 py-3";

    return (
        <div className='overflow-x-scroll overflow-hidden w-full relative'>
            <table className='w-full table-auto border border-border divide-y divide-border '>
                <thead className='bg-dryGray'>
                    {
                        users ?
                            (
                                <>
                                    <th scope='col' className={Head}>
                                        S.No.
                                    </th>
                                    <th scope='col' className={Head}>
                                        Image
                                    </th>
                                    <th scope='col' className={Head}>
                                        Id
                                    </th>
                                    <th scope='col' className={Head}>
                                        Date
                                    </th>
                                    <th scope='col' className={Head}>
                                        Full Name
                                    </th>
                                    <th scope='col' className={Head}>
                                        Email
                                    </th>
                                    <th scope='col' className={Head}>
                                        Role
                                    </th>
                                    <th scope='col' className={Head}>
                                        Actions
                                    </th>
                                </>
                            )
                            : (
                                <>
                                    <th scope='col' className={Head}>
                                        S.No.
                                    </th>
                                    <th scope='col' className={Head}>
                                        Id
                                    </th>
                                    <th scope='col' className={Head}>
                                        Date
                                    </th>
                                    <th scope='col' className={Head}>
                                        Title
                                    </th>
                                    <th scope='col' className={Head}>
                                        Actions
                                    </th>
                                </>
                            )
                    }
                </thead>
                <tbody className='bg-main divide-y divide-gray-800'>
                    {
                        users ?
                            users.map((user, index) => (
                                <tr key={index}>
                                    <td className={`${Text}`}>{index + 1} </td>
                                    <td className={Text}>
                                        <div className='w-12 bg-dry border border-border h-12 rounded-full overflow-hidden'>
                                            <img
                                                src={user?.image ?
                                                    user?.image :
                                                    "https://firebasestorage.googleapis.com/v0/b/movie-app-7992e.appspot.com/o/c9501ff3-b7f7-4491-bf60-9eee29e52d78.png?alt=media"}
                                                alt={user?.userName}
                                                className='w-full h-full rounded-full object-cover'
                                            />
                                        </div>
                                    </td>
                                    <td className={`${Text}`}>{user?._id ? user._id.slice(0, 8).toUpperCase() : "243hd3wdfj"}</td>
                                    <td className={Text}>{moment(user.createdAt).format("LL")}</td>
                                    <td className={Text}>{user?.userName}</td>
                                    <td className={Text}>{user?.email}</td>
                                    <td className={Text}>{user?.isAdmin ? "ADMIN" : "USER"}</td>
                                    <td className={`${Text} space-x-4`}>

                                        {
                                            !(user?.isAdmin) &&
                                            <>
                                                <button className='font-medium transitions text-green-500'>
                                                    <MdEmail size={23} />
                                                </button>
                                                <button
                                                    onClick={() => onDeleteFunction(user?._id)}
                                                    className='font-medium transitions  text-subMain'>
                                                    <Icon size={25} />
                                                </button>
                                            </>
                                        }
                                    </td>
                                </tr>
                            )) :
                            data && data.map((category, index) => (
                                <tr key={index}>
                                    <td className={`${Text}`}>{index + 1} </td>
                                    <td className={`${Text}`}>{category?._id && category?._id.slice(0, 8).toUpperCase()}</td>
                                    <td className={Text}>{moment(category?.createdAt).format("LL")}</td>
                                    <td className={Text}>{category?.title}</td>
                                    <td className={`${Text} space-x-4`}>
                                        <button onClick={() => onEditFunction(category)} className='font-medium transitions text-green-500'>
                                            <FiEdit size={23} />
                                        </button>
                                        <button
                                            onClick={() => onDeleteFunction(category?._id)}
                                            className='font-medium transitions  text-subMain'>
                                            <Icon size={25} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table2;