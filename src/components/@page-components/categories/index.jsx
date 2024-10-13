// components/@page-components/categories.js
import { FaShoppingCart, FaTag, FaGift, FaUser, FaIceCream, FaCookie } from 'react-icons/fa'; // Import the icons you want to use

const categories = [
    { name: 'All Products', icon: <FaShoppingCart className="mr-2" /> },
    { name: 'Discounts', icon: <FaTag className="mr-2" /> },
    { name: 'Gifts', icon: <FaGift className="mr-2" /> },
    { name: 'User Profiles', icon: <FaUser className="mr-2" /> },
    { name: 'Ice Cream', icon: <FaIceCream className="mr-2" /> }, // Ice Cream category
    { name: 'Waffles', icon: <FaCookie className="mr-2" /> }, // Waffles category
];

export default function Categories() {
    return (
        <div className="mb-5 text-gray-700">
            <h2 className="text-xl font-bold mb-3">Categories</h2>
            <div className="flex flex-wrap space-x-4">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="flex items-center p-3 bg-white shadow rounded-lg cursor-pointer hover:bg-gray-100 transition"
                    >
                        {category.icon}
                        <span>{category.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
