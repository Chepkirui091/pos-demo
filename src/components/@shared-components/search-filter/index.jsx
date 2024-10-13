import { FaSearch } from 'react-icons/fa';

export default function SearchFilter({ searchTerm, setSearchTerm }) {
    return (
        <div className="mb-5 flex items-center">
            <div className="relative w-full">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 pl-10 border rounded-full w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                    placeholder="Search..."
                />
            </div>
        </div>
    );
}
