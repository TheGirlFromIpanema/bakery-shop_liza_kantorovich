import SignUpForm from "../templates/signUp/SignUpForm.tsx";
import {LoginData, RegisterData} from "../../utils/shop-types.ts";
import {registerWithEmailAndPassword} from "../../firebase/firebaseAuthService.ts";
import {useNavigate} from "react-router-dom";


const SignUp = () => {
    const navigate = useNavigate();

    const submitFunc = async (data:RegisterData) => {
        const userEmailPass:LoginData = {
            email: data.email,
            password:data.password
        }
        try{
            await registerWithEmailAndPassword(userEmailPass);
            navigate('/login')
        }catch (e) {
            console.log(e) //Todo
        }
    }

    return (
        <div>
            <SignUpForm submitFn={submitFunc}/>
        </div>
    );
};

export default SignUp;