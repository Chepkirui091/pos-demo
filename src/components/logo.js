import Image from "next/image";
import logoImg from "/public/static/logo.png";

export const Logo = ({ variant }) => {
    return (
        <div className="bg-white flex items-center justify-center px-2 py-2 rounded-lg w-full">
            <Image src={logoImg} alt="Logo" width={150} />
        </div>
    );
};
