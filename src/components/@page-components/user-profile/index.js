import { useState } from 'react';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

const User = ({ username, onLogout }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="flex flex-col items-center text-gray-700 hover:text-gray-900"
            >
                {/* User Avatar with Person Icon */}
                <FaUserCircle className="w-8 h-8 text-gray-700 mr-2" />
                <span className="font-semibold">{username || 'Username'}</span>
            </button>

            {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
                    <button
                        onClick={onLogout}
                        className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                        <FaSignOutAlt className="mr-2" />
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default User;
