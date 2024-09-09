import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice.js";
import { Card } from "@mui/material";
import { H2Icon } from "@heroicons/react/16/solid";
import CardMi from "./Card.jsx";

import Search from "./Search.jsx";
import "./App.css"
import { useNavigate } from "react-router-dom";
import{changeHomeSaveIcon,setSearchTitle}from  "./userSlice.js"




const AllUser = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
 

  console.log("homicon should be true",user.homeIcon,user.saveIcon);
 
  let Navigate=useNavigate();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
 let newArr=user.users.filter((item)=>item.title.includes(user.searchbytitle));
  return (
    
    <div className="parent">
    
      
   <div onChange={(e)=>{dispatch(setSearchTitle(e.target.value))}}><Search /></div>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>{user.error}</div> : null}

      {!user.loading && user.users.length ? (
     
        <div  className="card1">
          {newArr.map((user) => (
            <div onClick={()=>{Navigate(`/item/${user.id}`) ;dispatch(changeHomeSaveIcon())}} key={user.id} className="particular-card">
              <CardMi user={user} />
              
              
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default AllUser;
