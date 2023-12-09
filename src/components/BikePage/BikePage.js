import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { setCommentsList } from "../Redux/Store";
import BikeSlider from "./BikeSlider";
import  './style/BikePage.css';

export default function BikePage({ bikes, added, addToCart, addFavBtn, favorite,setOverflow }) {
  const [bikeFillColors, setBikeFillColors] = useState(bikes.map(() => "black"));
  const [commentInput, setCommentInput] = useState("");
  const [userCommented, setUserCommented] = useState(false);
  useEffect(() => {
    const updFill = bikes.map((bike) =>
      favorite.some((favBike) => favBike.id === bike.id) ? "pink" : "black"
    );
    setBikeFillColors(updFill);
  }, [bikes, favorite]);

  const dispatch = useDispatch();
  const commentsList = useSelector((state) => state.comment.commentsList);
  const userName = useSelector((state) => state.user.userName);
  const { id } = useParams();
  const bikeID = Number(id);
  const cardToShow = bikes.find((item) => item.id === bikeID);
  const userNameCurrent = useSelector((state) => state.user.userName);
  const { enqueueSnackbar } = useSnackbar();
  const isAuthorized = useSelector((state) => state.user.isAuthorized);

  const handleClickVariant = (variant) => () => {
    const varCheck = `Item ${added ? 'removed' : 'added'}!`;
    enqueueSnackbar(varCheck, {
      variant,
      autoHideDuration: 1500,
    });
  };

  const addComment = (e) => {
    e.preventDefault()
    if (!commentInput.trim()) {
      enqueueSnackbar("Please enter a non-empty comment", {
        variant: "error",
        autoHideDuration: 1500,
      });
      return;
    }
    if (userCommented) {
      enqueueSnackbar("You can only post one comment", {
        variant: "error",
        autoHideDuration: 1500,
      });
      setCommentInput(''); 
      return;
    }
    if(!isAuthorized){
      enqueueSnackbar("You are not logged!", {
        variant: "error",
        autoHideDuration: 1500,
      });
      setCommentInput(''); 
      return;
    }


    var now = new Date();
 let hours = now.getHours();
 let minutes = now.getMinutes();
 let seconds = now.getSeconds();
const bikeName = cardToShow.name;
 const newComment = {
  id:commentInput.length,
  bikeName,
  userName,
  time: `${hours}:${minutes}:${seconds}`,
  text: commentInput,
};
// const time =`${hours}:${minutes}:${seconds}`
// const newComment = [userName,time,commentInput]

dispatch(setCommentsList([...commentsList,newComment]));
    setCommentInput(''); 
    setUserCommented(true);
  };


const deleteComment = (commentId , commentName) => {
 const idx = commentsList.findIndex((comment) => comment.id === commentId);
console.log(userNameCurrent)

 if(idx !== -1 &&  userNameCurrent === commentName && isAuthorized) {
  const newComs = [...commentsList.slice(0,idx),...commentsList.slice(idx+1)];
  dispatch(setCommentsList(newComs))
  setUserCommented(false)
 }
 else {
  enqueueSnackbar("It's not yours comment!", {
    variant: "error",
    autoHideDuration: 1500,
  });
  return;
 }
}

console.log(commentsList)

   return(
   <>
       <h1 className="info_sum">Item info:</h1>

       <div className="bike_container">
          <BikeSlider cardToShow={cardToShow} setOverflow={setOverflow}/>
           {/* <img className="info_img" src={cardToShow.img} width="500" height="350" alt="" /> */}
           <div className="bike-info-container">
               <h2 className="inner_info_sum">  {cardToShow.name} <svg onClick={() => { addFavBtn(cardToShow);}} className="bp-fav" focusable="false" 
                                      aria-hidden="true" viewBox="0 0 24 24"
                                       data-testid="FavoriteBorderIcon"  fill={bikeFillColors[cardToShow.id - 1]}>
                                      <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                                    </svg></h2>
               <p className="b-cost">Cost: <span>{cardToShow.cost} $</span> </p>
               <h3>About:</h3>
               <p className="bike-desq">{cardToShow.desq}</p>
                  <div className="btns-container">
                  <div className="add_but" onClick={() => addToCart(cardToShow)}>
                      <button  style={{ backgroundColor: added ? 'rgb(239, 85, 85)' : '#8cbe00' }} className="cart_bt" onClick={handleClickVariant(added ? 'error' : 'success') }><p>{added ? `Remove` : "Add"}</p></button>
                  </div>
                  
                  </div>
           </div>
       </div>
       <div className="comments-container">
       <h2>Reviews</h2>
        <div className="type-container">
          <input value={commentInput} maxLength={50} className="new-text" type='text'  name="comment" placeholder="Enter your view"  onChange={(e) =>  setCommentInput(e.target.value)} />
          <button onClick={addComment} >Send</button>
        </div>
        <div className="total-comments">
        { commentsList.map((comment) => (
            <div key={comment.id} className="comment">
              <div className="comment-head">
                <h3>{comment.userName}:<br/><small>{comment.bikeName}</small></h3>
                 <div>
                 <div className="com-btn">
              <button onClick={() => deleteComment(comment.id,comment.userName)}><img src='/img/trash.png' alt='clean'/></button>
              </div>
                 <p className="time">{comment.time}</p>
                </div>
              </div>
              <h4>{comment.text}</h4>
            </div>))}
        </div>
       </div>
       <div className="link-container">
       <Link to="/" className="link_back"><button className="go-back"><img className='info-img' src='/img/go-back.png' alt=''/><p className='back-sum' href="#">Back</p></button></Link>
       </div>
   </>
   )
}