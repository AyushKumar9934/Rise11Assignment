import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import CardMi from "./Card";
import "./particularCard.css";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import { changeButton, changeHomeSaveIcon } from "./userSlice.js";


const ParticularCard = () => {
  let Navigate = useNavigate();
  let dispatch = useDispatch();
  let { id } = useParams();
  console.log("id of click image is ", id);
  let users = useSelector((state) => state.user);
 
  useEffect(() => {
    dispatch(changeHomeSaveIcon());
}, []);

 
 console.log("this in particular card ",users.homeIcon,users.saveIcon)
  let filteredUser = users.users.filter((item) => {
    return item.id == id;
  });
  console.log("filteredUser is ", filteredUser);
  let AllPostbyfilteredUser = users.users.filter(
    (item) => item.userId == filteredUser[0].userId
  );
  let allSmallPostbyfilteredUser = AllPostbyfilteredUser.filter((user) => {
    return user.id != id;
  });
  console.log("all post by the particular user is ", AllPostbyfilteredUser);

  return (
    <div className="parentParticular">
      <div className="particularHeader">
        <div
          className="backarrow"
          onClick={() => {
            Navigate("/");
            dispatch(changeHomeSaveIcon());
          }}
        >
          <IoArrowBackCircleOutline />
        </div>
        <div className="postnumber">Post Number {id}</div>
      </div>
      <div className="particularImage" style={{backgroundImage:`url("https://picsum.photos/200?random=${id}")`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
       
        <div className="posttitle">{filteredUser[0].title}</div>
        <div className="logo">
          <CiShare2 />
          <MdOutlineFavoriteBorder />
        </div>
      </div>
      {
        <div className="details-user-button">
          {users.detailsbtn ? (
            <div
              style={{ backgroundColor: "#F05A22", color: "white" }}
              onClick={() => {
                dispatch(changeButton());
              }}
              className="details-btn"
            >
              Details
            </div>
          ) : (
            <div
              style={{ backgroundColor: "#C4C4C4", color: "black" }}
              onClick={() => {
                dispatch(changeButton());
              }}
              className="details-btn"
            >
              Details
            </div>
          )}

          {users.userbtn ? (
            <div
              style={{ backgroundColor: "#F05A22", color: "white" }}
              onClick={() => {
                dispatch(changeButton());
              }}
              className="user-btn"
            >
              User
            </div>
          ) : (
            <div
              style={{ backgroundColor: "#C4C4C4", color: "black" }}
              onClick={() => {
                dispatch(changeButton());
              }}
              className="user-btn"
            >
              User
            </div>
          )}
        </div>
      }
      <div className="details-user-body">
        {users.detailsbtn ? (
          filteredUser[0].body
        ) : (
          <h3>Post was Posted by {filteredUser[0].userId}</h3>
        )}
      </div>
      <div className="morepost">More Post</div>
      <div className="card1 restpostsbyuser">
        {allSmallPostbyfilteredUser.map((item) => 
         ( <div onClick={()=>Navigate(`/item/${item.id}`)} key={item.id} className="particular-card">
            {<CardMi user={item} />}
          </div>)
        )}
      </div>
    </div>
  );
};

export default ParticularCard;
