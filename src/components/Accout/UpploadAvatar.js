import React from "react"
import Avatar from "react-avatar-edit"
import { useDispatch, useSelector } from "react-redux";
import { setAvatar,setPreview } from "../Redux/Store";
import styles from "./style/User.module.css";

const UploadAvatar = () => {
const dispatch = useDispatch();
const src = useSelector((state) => state.user.userAvatar);
const preview =  useSelector((state) => state.user.preview);



    return (
    <div>
        <img  className={styles.user_profile_img} src="./img/avatar2.jpg" alt=" "/> 
    </div>
)
}

export default UploadAvatar;