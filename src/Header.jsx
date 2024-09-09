import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { IoMdPerson } from "react-icons/io"
import { IoMdNotifications } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { useParams } from 'react-router-dom';import { useDispatch, useSelector } from "react-redux";
import {changeHomeSaveIcon}from "./userSlice.js"

import "./Header.css"

const Header = () => {
  let dispatch=useDispatch();
  let users=useSelector((state)=>state.user);
  let {id}=useParams();

  console.log("in header user.homeicon is ",users.homeIcon)
  return (
    <div className='header'>
      <div className='title'><h2>TravelMedia.in</h2></div> 
        <div className='white'>
          
         
       
      <div   style={users.homeIcon?{color:"#F05A22"}:{color:"#F9DDCF"}}><CiHome /></div>
           <div style={{  color:"#F9DDCF"}}><IoMdPerson /></div>  
           <div style={{  color:"#F9DDCF"}}>   <IoMdNotifications /></div>

         {users.saveIcon?<div style={{  color:"#F05A22"}}> <CiBookmark /></div>:<div  style={{  color:"#F9DDCF"}}> <CiBookmark /></div>} 
            
       


        </div>
    </div>
  )
}

export default Header