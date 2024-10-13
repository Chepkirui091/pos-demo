import { FaCog, FaSignOutAlt, FaShoppingCart } from 'react-icons/fa';

export default function Sidebar() {
    return (
        <div className="w-64 bg-blue-800 text-white p-5">
            <div className="text-2xl font-bold mb-8">
                <img src="/logo.png" alt="Logo" className="w-10 h-10 inline-block" />
                MyStore
            </div>
            <div className="flex flex-col space-y-4">
                <button className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded">
                    <FaShoppingCart />
                    <span>Cart</span>
                </button>
                <button className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded">
                    <FaCog />
                    <span>Settings</span>
                </button>
                <button className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded">
                    <FaSignOutAlt />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
}
