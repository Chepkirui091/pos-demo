const LoginBanner = () => {
    return (
        <div className="rounded-lg w-full flex flex-col items-center p-4 bg-white shadow-lg">
            <h5 className="text-lg font-semibold text-center mb-4">POS System</h5>
            <p className="text-sm text-center mt-4">
                Copyright {'\u00a9'} 2024 | All Rights Reserved | Sanlam Limited is the licensed controlling company of the Sanlam Limited Insurance Group. Sanlam Life Insurance Limited is an insurer licensed to conduct life insurance business and is a licensed financial services provider and a registered credit provider.
            </p>
        </div>
    );
};

export default LoginBanner;
