import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import axios from 'axios'

const login = () => {
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    async function submit(e){
        e.preventDefault();
        try{
            await axios.post('http://localhost:3000/login',{
                email,password
            }).then(res=>{
                if(res.data=='exist'){

                    navigate('/')
                }
                else if(res.data=='notexit'){
                    alert('user have not signUp')
                    navigate('/signup')
                }
            }).catch(err=>{
                alert('wrong details')
                console.log(err);
            })

        }
        catch(err){
            console.log('error in loging page',err);
        }
    }
  return (
   
        <div className="login">
          <h4>Login</h4>
          <form action='post'>
          <div className="text_area">
                <input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue="Email"
                  className="text_input"
                  onChange={(e)=>{setEmail(e.target.value)}}
    
                />
              </div>
            <div className="text_area">
              <input
                type="password"
                id="password"
                name="password"
                defaultValue="password"
                className="text_input"
                   onChange={(e)=>{setPassword(e.target.value)}}
              />
            </div>
            <input
              type="submit"
              value="LOGIN"
              className="btn"
             onClick={submit}
  
            />
          </form>
          <Link className="link" to="/signup">Sign Up</Link>
        </div>
      )
  
}

export default login