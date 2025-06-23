
import {useAppDispatch} from "../../redux/hooks.ts";
import {loginAction} from "../../redux/slices/authSlice.ts";
import {useNavigate} from "react-router-dom";
import SignIn from "../templates/signIn/sign-in/SignIn.tsx";
import {LoginData} from "../../utils/shop-types.ts";


const LogIn = () => {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const submitFunc = (loginData: LoginData) => {
        dispatch(loginAction(loginData.email));
        navigate("/");
    }

    return (
        <div>
            <SignIn submitFn={submitFunc}/>
        </div>
    );
};

export default LogIn;