import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { auth } from '../firebase';

import '../css/Login.css';

function Register() {
    const [email,setEmail]=useState('');        //keep track whatever u type in email
    const [password,setPassword]=useState('');
    const history=useHistory();     // allows us programmatically change the url
    
    const register=e=>{

        e.preventDefault();  //for avoid loss of data after refreshing 
    
        //some fancy firebase register
    
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
        if (auth) {
            history.push('/');
        }
        console.log(auth);
        }).catch(error=>
        alert(error.message))
    }
    
    return (
      <div className="login">
        <div className="login__container">
            <h1 className="login__sign">Sign up</h1>
            <form>
                <h5>First Name</h5>
                <input type="text" required></input>
                <h5>Last Name</h5>
                <input type="text" required></input>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange=
                {e=>setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                
            </form>
            <button onClick={register} className="login__registerButton">Sign Up</button>
        </div>
      </div>
    )
}

export default Register;