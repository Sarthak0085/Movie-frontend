import Sidebar from '../Sidebar'
import Table2 from '../../../components/Table2';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserAction, getAllUsersAction } from '../../../redux/actions/userAction';
import { toast } from 'react-toastify';
import Loader from '../../../components/Notification/Loader';
import Empty from '../../../components/Notification/Empty';
import { useEffect, useState } from 'react';
import ConfirmationModal from '../../../components/Modals/ConfirmationModal';

const Users = () => {
    const dispatch = useDispatch();

    const { isLoading, isError, users } = useSelector((state) => state.adminGetAllUsers);
    const { isLoading: deleteLoading, isError: deleteError, isSuccess, message } = useSelector((state) => state.adminDeleteUser);

    const [openModal, setOpenModal] = useState();

    const deleteUserHandler = (id) => {
        if (window.confirm("Are you sure you want to delete")) {
            dispatch(deleteUserAction(id));
        }
    }

    useEffect(() => {
        dispatch(getAllUsersAction())
        if (!isSuccess) {
            toast.success(message);
        }
        if (isError || deleteError) {
            toast.error(isError || deleteError);
            dispatch({ type: isError ? "GET_ALL_USERS_RESET" : "DELETE_USER_BY_ADMIN_RESET" });
        }
    }, [dispatch, isSuccess, isError, deleteError, message])

    return (
        <Sidebar>
            <ConfirmationModal open={openModal} setOpen={setOpenModal} />
            <div className="flex flex-col gap-6">
                <div className="flex-btn gap-2">
                    <h2 className="text-xl font-bold">Users</h2>
                </div>
                {
                    isLoading || deleteLoading ?
                        <Loader />
                        :
                        users && users.length > 0 ?
                            <Table2 users={users} Icon={AiFillDelete} admin={true} onDeleteFunction={deleteUserHandler} />
                            :
                            <Empty message="You don't have any user yet." />
                }
            </div>
        </Sidebar>
    )
}

export default Users;