import { useState } from "react";
import LoginBanner from "@/components/@page-components/login/login-banner";
import LoginForm from "@/components/@page-components/login/login-form";

const Login = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleOnLogin = (values) => {
        console.log("Static Login Submitted: ", values);
        alert("Login successful (static)");
        // Optionally, navigate to the dashboard or another page
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 p-4">
            <div className="hidden md:block md:w-1/2">
                <LoginBanner />
            </div>
            <div className="w-full md:w-1/2">
                <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-lg shadow-lg">
                    <LoginForm onLogin={handleOnLogin} />
                </div>
            </div>
        </div>
    );
};

export default Login;
