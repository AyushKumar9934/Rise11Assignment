import React, { useState } from 'react'
import axios from 'axios';
import './login.css'
import { Link,useNavigate} from 'react-router-dom';



const signup = () => {
    const navigate=useNavigate();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    async function submit(e){
        e.preventDefault();
        try{
            await axios.post('http://localhost:3000/signup',{
                name,email,password
            }).then(res=>{
                if(res.data=='exist'){
                    alert('user is already exist.Please login')

                    navigate('/login')
                }
                else if(res.data=='notexist'){
                    
                    navigate('/')
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
            <h4>Signup</h4>
            <form action='post'>
              <div className="text_area">
                <input
                  type="text"
                  id="username"
                  name="name"
                  defaultValue="username"
                  className="text_input"
                  onChange={(e)=>{
                    setName(e.target.value);
                  }}
                />

              </div>
              <div className="text_area">
                <input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue="Email"
                  className="text_input"
                  onChange={(e)=>{
                    setEmail(e.target.value);
                  }}
    
                />
              </div>
              <div className="text_area">
                <input
                  type="password"
                  id="password"
                  name="password"
                  defaultValue="password"
                  className="text_input"
                  onChange={(e)=>{
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <input
                type="submit"
                value="Signup"
                className="btn"
                onClick={submit}
              />
            </form>
            <Link className="link" to="/login">Login</Link>
          </div>
        )
}

export default signup