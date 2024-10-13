// components/@page-components/Navbar.js
import Header from "@/components/@page-components/header";
import SearchFilter from "@/components/@shared-components/search-filter";
import User from "@/components/@page-components/user-profile";

const Navbar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="bg-white shadow-md flex items-center justify-between p-4">
            <Header />
            <div className="hidden sm:block w-full mx-4"> 
                <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            <User />
        </div>
    );
};

export default Navbar;
