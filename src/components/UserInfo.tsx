import {useAppDispatch, useAppSelector} from "../redux/hooks.ts";
import {currentAvatar, currentName} from "../redux/slices/userInfoSlice.ts";
import {changeAvatar, changeName} from "../firebase/firebaseAuthService.ts";

const UserInfo = () => {
    const {name} = useAppSelector(state => state.userInfo);
    const {avatar} = useAppSelector(state => state.userInfo)
    const {authUser} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    return (
        <div style={{display: "flex", marginRight: "10px", alignItems: "center", color: "black"}}>
            <span style={{marginRight: "10px"}}
                  onClick={() => {
                if (authUser) {
                    const newName = prompt("Enter new name") as string
                    changeName(newName)
                    dispatch(currentName(newName))
                }
            }}>{name}</span>
            <img src={avatar} style={{borderRadius: "50%", width: "32px", height: "32px"}} alt={"avatar"}
                 onClick={() => {
                     if (authUser) {
                         const newAvatar = prompt("Enter new avatar url") as string
                         changeAvatar(newAvatar)
                         dispatch(currentAvatar(newAvatar))
                     }
                 }}/>
        </div>
    );
};

export default UserInfo;