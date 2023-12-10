import "./style/AvatarPicker.css"

export default function AvatarPicker({chooseAvatar,setChooserAvatar,handleSelectedAvatar}){
    const handleCloseChooser = () => {
        setChooserAvatar('none');
    }
    return(
          <div style={{display:chooseAvatar}} className="choose-container"> 
               <div className="choose-block">
               <img src="./img/avatar1.png" alt="" onClick={() => handleSelectedAvatar("./img/avatar1.png")}/>
               <img src="./img/avatar2.png" alt="" onClick={() => handleSelectedAvatar("./img/avatar2.png")}/>
               <img src="./img/avatar3.png" alt="" onClick={() => handleSelectedAvatar("./img/avatar3.png")}/>
               <img src="./img/avatar4.png" alt="" onClick={() => handleSelectedAvatar("./img/avatar4.png")}/>
               <img src="./img/avatar5.png" alt="" onClick={() => handleSelectedAvatar("./img/avatar5.png")}/>
               <img src="./img/avatar6.png" alt="" onClick={() => handleSelectedAvatar("./img/avatar6.png")}/>
               </div>
              <div className="closer" onClick={() => handleCloseChooser()}>
              &times;
              </div>
          </div>
    )
}