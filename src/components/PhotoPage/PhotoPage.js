import "./style/PhotoPage.css"

export default function PhotoPage({displayPhoto,setDisplayPhoto,choosenPhoto}){
    return(
        <div className="photo-overlay" style={{display:displayPhoto}}>
                    <div className="photo-wrapper" >
          <div className="photo-src">
            <img src={choosenPhoto} alt="photo"/>
          </div>
          <div className="photo-closer" >
               <img src="/img/close-outline.svg" onClick={()=>{setDisplayPhoto('none')}} alt="closer"/>
          </div>
        </div>
        </div>
    )
}