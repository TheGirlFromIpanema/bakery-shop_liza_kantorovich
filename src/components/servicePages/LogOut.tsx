import {useAppDispatch} from "../../redux/hooks.ts";
import {logoutAction} from "../../redux/slices/authSlice.ts";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import {changeName} from "../../redux/slices/userInfoSlice.ts";


const LogOut = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    return (
        <div>
            <Button variant={'contained'}
                    onClick={() => {
                        alert("Are you sure?")
                        dispatch(logoutAction())
                        dispatch(changeName("Anonym"))
                        navigate("/")
                    }}>
                Log out
            </Button>
        </div>
    );
};

export default LogOut;