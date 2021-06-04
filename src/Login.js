import React, { useState } from 'react'
import {Link,useHistory} from  "react-router-dom";
import "./Login.css";
import {auth} from "./firebase"
function Login() {
    const history=useHistory();
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const signIn=(e)=>{
e.preventDefault();
//facy firebase stuff
auth
.signInWithEmailAndPassword(email,password)
.then(auth=>{
    history.push('/')
})
.catch(error=>alert(error.message))
    }

    const register=(e)=>{
        e.preventDefault();
        //facy firebase stuff
        auth
        
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth)
            if(auth){
history.push('/')
            }
        })
        .catch(error=>alert(error.message))
    }
    return (
        <div className="login">
        <Link to="/">

          <img
          className="login__logo"
           src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"></img>
        </Link>

        <div className="login__container">

            <h1>Sign-In</h1>
            <form>
                <h5>Email</h5>
                <input type="text" value={email} 
                onChange={(e)=>setEmail(e.target.value)}></input>
                <h5>Password</h5>
                <input type="password"
                value={password}
                onChange={e=>setPassword(e.target.value)}></input>

                 
                 <button type="submit" className="login__signinButton"
                 onClick={signIn}>Sign-In</button>
            </form>

            <p>Welcome to Amazon.in. Amazon Seller Services Private Limited and its affiliates provide access to the Amazon.in website (the "website") to you subject to the conditions set out on this page.</p>
            <button className="login__registerButton"
            onClick={register}>Create your Amzon account</button>
        </div>
        </div>
    )
}

export default Login
