import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate(); // useNavigate must be called inside the component

    const handleClick = () => {
        console.log("Get Started clicked");
        navigate("/onboarding"); // Navigate to the /onboarding route
    };

    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl font-bold mb-4">
                    From Diagrams to Code, Seamlessly
                </h1>
                <p className="text-xl mb-8">
                    Transform your system designs into structured folder hierarchies with ease.
                </p>
                <div className="space-x-4">
                    <button
                        className="bg-white text-blue-600 px-6 py-3 rounded shadow-lg hover:bg-gray-100"
                        onClick={handleClick}
                    >
                        Get Started
                    </button>
                    <button className="bg-blue-700 px-6 py-3 rounded shadow-lg hover:bg-blue-800">
                        View Demo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
