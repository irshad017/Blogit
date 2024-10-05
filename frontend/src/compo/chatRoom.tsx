import { useEffect, useState } from "react";
import { url3 } from "../assets/ImageURL";
import { FaArrowLeft, FaUser } from "react-icons/fa"; // Import the back arrow and user icons
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate, } from "react-router-dom";

interface DataType {
    id: string;
    username: string;
}
interface FilterUserType {
    id: string;
    username: string;
}
interface FilterUserMap {
    id: string;
    username: string;
}

export const ChatRoom = () => {
    
    const [newMsgPost,setNewMsgPost] = useState("")
    const [fetched, setFetched] = useState(true);
    const [fetchUser, setFetchUser] = useState(true);
    const [allUsers, setAllUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState<string | null>(null); // State for the selected user
    const [searchTerm, setSearchTerm] = useState(""); // State for the search term
    const [isNightMode, setIsNightMode] = useState(true); // Night mode state
    const [filteredUsers, setFilteredUsers] = useState<FilterUserMap[]>([]);
    const navigate = useNavigate();
    const UserName = localStorage.getItem('username')

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/user/getUsers`);
                console.log("Fetched users:", response.data.users);
                const usersData = response.data.users
                const UserName = localStorage.getItem('username')
                console.log("Set: ", usersData)
                setAllUsers( usersData.filter( (data: DataType) => data.username != UserName) || []);
                setFetched(false); // Set to false once data is fetched
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setFetchUser(false); // Disable the loading state
            }
        };
        fetchUsers();
    }, []);

    // Filter users based on the search term
    useEffect(()=> {
        const FilteredUsers = allUsers.filter((user: FilterUserType) => 
            user.username.toLowerCase().includes(searchTerm.toLowerCase())
        ).slice(0, 8); // Show only the first 8 users
        setFilteredUsers(FilteredUsers)
    },[allUsers, searchTerm])

    return (
        <div className={`flex flex-col h-screen ${isNightMode ? 'bg-gray-900 text-gray-200' : 'bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white'}`}>
            {/* Back Button */}
            <div className="flex justify-start items-center">
                <button
                    onClick={() => navigate('/blogs')} // Navigate back to /blogs
                    className={`self-start p-2 m-4 ${isNightMode ? 'bg-gray-700' : 'bg-gray-300'} rounded-md hover:${isNightMode ? 'bg-gray-600 ' : 'bg-gray-400'} transition-all duration-300`}
                >
                    <FaArrowLeft className="text-lg" />
                </button>
                {/* Toggle Night Mode Button */}
                <button 
                    onClick={() => setIsNightMode(!isNightMode)} 
                    className={`h-10 p-2 rounded-full ${isNightMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-gray-800 font-bold'} transition-all duration-300`}>
                    {isNightMode ? 'Day Mode' : 'Night Mode'}
                </button>
            </div>

            <div className="flex flex-row w-full max-w-6xl mx-auto flex-grow gap-2">
                {/* Users List */}
                <div className={`w-1/4 sm:w-full lg:w-1/3 p-4 rounded-xl shadow-2xl ${isNightMode ? 'bg-gray-800' : 'bg-gray-700'}`}>
                    {/* Profile */}
                    <div className="flex items-center p-2 mb-4">
                        <img 
                            src={url3}
                            alt="User" className="w-10 h-10 rounded-full" />
                        <div className="ml-4">
                            {fetchUser ? (
                                <h2 className="text-sm font-semibold">Loading...</h2>
                            ) : (
                                <>
                                    <h2 className="hidden sm:block text-sm font-semibold">
                                        {UserName ? 
                                            (UserName.includes('@') ? UserName.slice(0, UserName.indexOf('@')) : UserName.slice(0, 5)) 
                                            : "Default Name"} {/* You can use a default name or leave it blank */}
                                    </h2>
                                    <p className="hidden sm:block text-xs">{UserName}</p>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Chat List */}
                    <div>
                        <input
                            type="text"
                            placeholder="Search..."
                            className={`w-full mb-4 p-3 border border-gray-600 ${isNightMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'} rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all duration-300`}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                        />
                        <ul>
                            {fetched ? (
                                <li className="text-center text-gray-500">Loading...</li>
                            ) : (
                                filteredUsers.map((user, idx) => (
                                    <li
                                        key={idx}
                                        // onClick={()=>HandelSelectUserToChat({username: user.username, ReceiverId: user.id})} 
                                        onClick={()=>setSelectedUser(user.username)} 
                                        className={`flex items-center p-2 hover:${isNightMode ? 'bg-gray-600' : 'bg-gray-300'} rounded-lg cursor-pointer mb-2`}
                                    >
                                        {/* {user.id} */}
                                        <FaUser className="hidden sm:block w-8 h-8 border-2 rounded-full bg-white text-black" />
                                        <span className="hidden sm:block ml-2">{user.username}</span>
                                        <span className="block sm:hidden ml-2"> 
                                            {user.username.includes('@') ? user.username.slice(0, user.username.indexOf('@')) : user.username.slice(0, 5)}
                                        </span>
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                </div>

                {/* Messaging Section */}
                <div className={`w-full lg:w-2/3 p-4 rounded-xl flex flex-col ${isNightMode ? 'bg-gray-800' : 'bg-white'}`}>
                    {/* Chat Header */}
                    <div className={`flex items-center justify-between border-b pb-2 mb-2 ${isNightMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <div className="flex items-center">
                            <img 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQlVYQsJxbEDr57v18Wmwi2rXLOGQui08vHw&s"
                                alt="User" className="border-2 border-black w-10 h-10 rounded-full" />
                            <div className="ml-4">
                                <h2 className="text-sm font-semibold text-gray-300">{selectedUser || "Select_User"}</h2>
                                {/* <p className="text-xs text-gray-500">x@x</p>
                                <p className="text-xs text-gray-500">xx</p> */}
                            </div>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-grow overflow-y-auto">
                        <div className="mb-4 flex justify-end ">
                            <div className=" mr-1 rounded-t-xl rounded-l-xl flex justify-center pr-3 space-x-2 ml-2 bg-gray-600 text-white p-2">
                                hello
                            </div>
                            <img 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQlVYQsJxbEDr57v18Wmwi2rXLOGQui08vHw&s"
                                alt="User" className="w-8 h-8 rounded-full" />
                        </div>
                        <div className="mb-4 flex">
                            <img src="https://via.placeholder.com/40" alt="User" className="w-8 h-8 rounded-full" />
                            <div className="rounded-t-xl rounded-r-xl flex justify-center pr-3 space-x-2 ml-2 bg-gray-600 text-white p-2">
                                hii
                            </div>
                        </div>
                        
                    </div>
                    <div className="mt-4 border-t pt-2 relative">
                        <input
                            value={newMsgPost}
                            onChange={(e) => setNewMsgPost(e.target.value)}
                            // onKeyDown={(e) => {
                            //     if (e.key === 'Enter') {
                            //         handleSendMessage();
                            //     }
                            // }}
                            type="text"
                            placeholder="Type something..."
                            className={`w-full p-2 pr-10 border border-gray-300 rounded-md ${isNightMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
                        />
                        <button 
                            // onClick={handleSendMessage}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-all duration-300"
                        >
                            Send
                        </button>
                    </div>


                </div>
            </div>
        </div>
    );
};

