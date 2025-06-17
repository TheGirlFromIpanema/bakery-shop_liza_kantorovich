import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


const ErrorPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleUnload = () => {
            sessionStorage.setItem("ErrorPage", "true");
        };
        window.addEventListener("unload", handleUnload);
        return () => {
            window.removeEventListener("unload", handleUnload);
        };
    }, []);

    useEffect(() => {
        if (sessionStorage.getItem("ErrorPage") === "true") {
            sessionStorage.removeItem("ErrorPage");
            navigate("/");
        }
    }, [navigate]);

    return (
        <div>
            Something went wrong.
        </div>
    );
};

export default ErrorPage;