import Link from 'next/link';
import { FaCog, FaSignOutAlt, FaShoppingCart, FaHome } from 'react-icons/fa';

export default function Sidebar() {
    return (
        <div className=" fixed top-0 left-0 w-64 h-screen bg-blue-800 text-white p-5 flex flex-col justify-between ">
            <div>
                {/* Logo Link */}
                <Link href="/" className="text-2xl font-bold mb-8 flex items-center">
                    <img
                        loading="lazy"
                        src="https://www.shutterstock.com/shutterstock/photos/1472127647/display_1500/stock-vector-p-o-s-letter-logo-design-vector-1472127647.jpg"
                        alt="P O S letter logo design vector"
                        className="w-10 h-10 inline-block mr-2"
                    />
                    <span>POS System</span>
                </Link>
                <div className="flex flex-col space-y-4">
                    <Link href="/dashboard" className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded">
                        <FaHome className="text-xl" />
                        <span className="hidden md:block">Home</span>
                    </Link>
                </div>
            </div>
            <Link href="/auth/login" className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded">
                <FaSignOutAlt className="text-xl" />
                <span className="hidden md:block">Logout</span>
            </Link>
        </div>
    );
}
