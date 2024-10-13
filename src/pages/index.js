import Image from "next/image";
import localFont from "next/font/local";
import LoginForm from "@/components/@page-components/login/login-form";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
      <div className="home bg-white h-screen flex items-center justify-center text-gray-800">
        <LoginForm />
      </div>
  );
}
