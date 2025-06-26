import SignUpForm from "../templates/signUp/SignUpForm.tsx";
import {RegisterData} from "../../utils/shop-types.ts";
import {registerWithEmailAndPassword} from "../../firebase/firebaseAuthService.ts";
import {useNavigate} from "react-router-dom";


const SignUp = () => {
    const navigate = useNavigate();

    const submitFunc = async (data:RegisterData) => {
        try{
            await registerWithEmailAndPassword(data);
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