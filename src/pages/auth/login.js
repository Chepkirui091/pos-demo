import Head from 'next/head';
import Login from "@/components/@page-components/login";

const title = "Login";
const LoginPage = () => {
    return (
        <>
            <Head>
                <title>{title} | POS System</title>
            </Head>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <Login />
            </div>
        </>
    );
};

export default LoginPage;
