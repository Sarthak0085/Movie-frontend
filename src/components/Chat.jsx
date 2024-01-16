/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { io } from "socket.io-client";

const Chat = ({ movieId, user }) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [socket, setSocket] = useState(null);
    const chatContainerRef = useRef();

    useEffect(() => {
        const newSocket = io('http://localhost:5000');

        newSocket.on('connect', () => {
            console.log('Connected to the server');
        });

        newSocket.emit('join-room', movieId);

        newSocket.on('receive-message', (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        setSocket(newSocket);

        scrollToBottom()

        return () => {
            newSocket.disconnect();
        };


    }, [movieId, messages]);

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            const chatContainer = chatContainerRef.current;
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (message.trim() !== '' && socket !== null) {
            socket.emit('send-message', { message, room: movieId, userId: user._id, image: user?.image, userName: user?.userName });
            setMessage('');
        }
    };

    const getCurrentTime = () => {
        const now = new Date();

        let hours = now.getHours();
        let minutes = now.getMinutes();

        // Convert to 12-hour clock format
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Handle midnight (12 AM)

        // Add leading zero to minutes if needed
        minutes = minutes < 10 ? Number(`0${minutes}`) : minutes;

        // Construct the time string
        const formattedTime = `${hours}:${minutes} ${ampm}`;

        return formattedTime;
    }

    const currentTime = getCurrentTime();

    return (
        <div className="lg:w-[30%] md:[15%] mt-10 lg:mt-0 flex flex-col w-full py-20">
            <div ref={chatContainerRef} className="bg-dry-300 lg:h-[550px] space-y-3 border p-3 border-border overflow-y-auto text-white">
                {

                    messages.map((msg, index) => (
                        msg?.message &&
                        <div key={index} className={`mb-4 ${msg?.userId === user?._id ? 'flex-row-reverse' : 'flex-row'}`}>
                            <div className={`flex gap-2 items-start ${msg?.userId === user?._id ? 'flex-row-reverse' : 'flex-row'}`}>
                                <img
                                    src={msg?.image}
                                    alt={msg?.userName}
                                    className="w-8 h-8 rounded-full object-cover mr-2"
                                />
                                <div className="flex flex-col">
                                    <div className={`font-bold ${msg?.userId === user?._id ? 'text-right' : 'text-left'}`}>{msg?.userName}</div>
                                    <div className="bg-gray-500 p-2 rounded">{msg?.message}</div>
                                    <div className="text-sm text-gray-500 mt-1">{currentTime}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="inset-0 mb-2">
                {
                    user !== null ?
                        <form onSubmit={handleSubmit} className="bg-white mt-5 mx-auto flex rounded-lg items-center justify-center">
                            <input
                                type="text"
                                value={message}
                                placeholder="Enter a message"
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-[80%] h-[50px]"
                            />
                            <button type="submit" className="rounded-full pl-2 text-blue-500">Submit</button>
                        </form>


                        :
                        <div className='text-white border border-border mt-5 mx-auto flex rounded-lg items-center justify-center px-4'>

                            <Link to="/login" className='underline p-3'>
                                Please login to chat
                            </Link>
                        </div>
                }
            </div>
        </div>
    )
}

export default Chat