import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef } from 'react'
import { IoMdClose } from 'react-icons/io';

const MainModal = ({ modalOpen, setModalOpen, children }) => {

    const cancelButtonRef = useRef();

    return (
        <Transition show={modalOpen} as={Fragment} appear>
            <Dialog
                as="div"
                className="fixed inset-0 overflow-y-auto text-center"
                initialFocus={cancelButtonRef}
                onClose={() => setModalOpen(false)}
            >
                <div className='min-h-screen px-4'>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 '
                        enterTo='opacity-100 '
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 scale-100'
                        leaveTo='opacity-0 '
                    >
                        <Dialog.Overlay className="inset-0 fixed bg-black opacity-60" />
                    </Transition.Child>
                    <span className='inline-block h-screen align-middle' aria-hidden={"true"}>
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 scale-95'
                        enterTo='opacity-100 scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 scale-100'
                        leaveTo='opacity-0 scale-95'
                    >
                        {children}
                    </Transition.Child>
                    <div className='absolute right-5 top-5'>
                        <button
                            onClick={() => setModalOpen(false)}
                            type='button'
                            className='transitions w-10 h-10 flex-column px-4 py-2 text-base font-medium text-white bg-subMain rounded-full hover:text-subMain hover:bg-white'>
                            <IoMdClose />
                        </button>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default MainModal;