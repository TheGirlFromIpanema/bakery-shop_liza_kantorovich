import SignIn from "./sign-in/SignIn.tsx";


const LogIn = () => {
    return (
        <div>
            <SignIn func={(object:object) => (console.log(JSON.stringify(object)))}/>
        </div>
    );
};

export default LogIn;