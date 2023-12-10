import React,{useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import { setAvatar } from "../Redux/Store";
import styles from "./style/User.module.css";
import AvatarPicker from "./AvatarPicker";

const UploadAvatar = () => {
const dispatch = useDispatch();
const src = useSelector((state) => state.user.userAvatar);
const [chooseAvatar,setChooserAvatar] = useState('none');

const handleAvatarChange = () => {
       setChooserAvatar('flex');
}

const handleSelectedAvatar = (selectedAvatar) => {
    dispatch(setAvatar(selectedAvatar))
    setChooserAvatar('none');
}


    return (
    <div className="avatar">
        <img  className={styles.user_profile_img} src={src} alt=" " onClick={() => handleAvatarChange()}/> 
        <AvatarPicker chooseAvatar={chooseAvatar} setChooserAvatar={setChooserAvatar} handleSelectedAvatar={handleSelectedAvatar}/>
    </div>
)
}

export default UploadAvatar;