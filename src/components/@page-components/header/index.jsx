export default function Header() {
    const getCurrentGreeting = () => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            return "Good Morning";
        } else if (currentHour < 18) {
            return "Good Afternoon";
        } else {
            return "Good Evening";
        }
    };

    return (
        <div className="mb-5">
            <h1 className="text-3xl font-bold text-gray-900">{getCurrentGreeting()}!</h1>
            <p className="text-gray-600">
                Simplify your shopping experience and enjoy seamless transactions!
            </p>
        </div>
    );
}
