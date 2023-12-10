import "./style/UserEditor.css"

export default function UserEditor({handleEditName,displayInput,usernameRef}){
    const handleKeyDown = (event) => {
            if(event.key === 'Enter'){
                handleEditName(usernameRef)
            }
          }  
    return( 
        <div style={{display:displayInput}}>
            <input maxLength={10} onKeyDown={handleKeyDown} type='text' ref={usernameRef}  className="new-name-input"/>
        </div>
    )
}