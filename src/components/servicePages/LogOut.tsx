import {useAppDispatch} from "../../redux/hooks.ts";
import {logoutAction} from "../../redux/slices/authSlice.ts";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import {currentName, currentAvatar} from "../../redux/slices/userInfoSlice.ts";


const LogOut = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    return (
        <div>
            <Button variant={'contained'}
                    onClick={() => {
                        alert("Are you sure?")
                        dispatch(logoutAction())
                        dispatch(currentName("Anonym"))
                        dispatch(currentAvatar(""))
                        navigate("/")
                    }}>
                Log out
            </Button>
        </div>
    );
};

export default LogOut;