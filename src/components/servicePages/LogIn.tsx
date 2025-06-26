
import {useAppDispatch} from "../../redux/hooks.ts";
import {loginAction} from "../../redux/slices/authSlice.ts";
import {useNavigate} from "react-router-dom";
import SignIn from "../templates/signIn/sign-in/SignIn.tsx";
import {LoginData} from "../../utils/shop-types.ts";
import {login} from "../../firebase/firebaseAuthService.ts";
import {changeName} from "../../redux/slices/userInfoSlice.ts";


const LogIn = () => {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const submitFunc = async (loginData: LoginData) => {
        try{
            const res = await login(loginData);
            dispatch(loginAction(res.email));
            dispatch(changeName(res.name))
            navigate('/');
        }catch (e) {
            console.log(e) //Todo
        }
    }

    return (
        <div>
            <SignIn submitFn={submitFunc}/>
        </div>
    );
};

export default LogIn;