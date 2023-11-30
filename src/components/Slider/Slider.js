import "./style/Slider.css"
export default function Slider() {
    return(
        <>
        <div className="slider-container">
                <button>prev</button>
               <div className="slider-content">
                  <img src="./img/bike1.png"/>
                  <img src="./img/bike2.png"/>
                  <img src="./img/bike3.png"/>
                  <img src="./img/bike4.png"/>
               </div>
               <button>next</button>
        </div>
        </>
    )
}