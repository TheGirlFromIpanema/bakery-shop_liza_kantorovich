import SignUpForm from "../templates/signUp/SignUpForm.tsx";
import {RegisterData} from "../../utils/shop-types.ts";


const SignUp = () => {

    const submitFunc = (registerData:RegisterData) => {
        console.log(JSON.stringify(registerData));
    }

    return (
        <div>
            <SignUpForm submitFn={submitFunc}/>
        </div>
    );
};

export default SignUp;