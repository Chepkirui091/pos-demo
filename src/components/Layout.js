import Link from 'next/link';
import { FaCog, FaSignOutAlt, FaShoppingCart, FaHome } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";

export default function Layout({ children }) {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false); // Start with a default value

    useEffect(() => {
        const handleResize = () => {
            const isMobileNow = window.innerWidth < 768;
            if (isMobileNow !== isMobile) {
                setIsMobile(isMobileNow);
                setOpen(window.innerWidth > 768);
            }
        };

        // Set initial value on mount
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isMobile]);

    return (
        <div className="flex flex-row w-screen h-screen overflow-hidden">
            {/* Sidebar */}
            <div className={`${isMobile && !open ? "md:w-auto w-[12%]" : ""} ${isMobile && open ? "w-[12%] md:w-auto" : ""} min-h-screen h-full bg-blue-800 text-white flex flex-col justify-between`}>
                <div>
                    {/* Logo Link */}
                    <Link href="/dashboard" className="text-2xl font-bold mb-8 flex items-center">
                        <img
                            loading="lazy"
                            src="https://www.shutterstock.com/shutterstock/photos/1472127647/display_1500/stock-vector-p-o-s-letter-logo-design-vector-1472127647.jpg"
                            alt="P O S letter logo design vector"
                            className="w-10 h-10 inline-block mr-2"
                        />
                        <span className="sm:block">POS System</span>
                    </Link>
                    <div className="flex flex-col space-y-4">
                        <Link href="/dashboard" className={`flex items-center space-x-2 hover:bg-blue-700 p-2 rounded ${router.pathname === '/' ? 'bg-blue-700' : ''}`}>
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
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col w-auto overflow-x-hidden">
                <div className="flex-1 min-h-0 overflow-auto w-full">{children}</div>
            </div>
        </div>
    );
}
