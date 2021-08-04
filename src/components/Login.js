import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { auth } from '../firebase';
import '../css/Login.css';

function Login() {
    const [email,setEmail]=useState('');        //keep track whatever u type in email
    const [password,setPassword]=useState('');
    const history=useHistory();     // allows us programmatically change the url

    const signIn=e=>{
      e.preventDefault();

      //some fancy firebase login

      auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
          history.push('/')
        })
        .catch(error => alert(error.message))

    }

    return (
      <div className="login">
        <div className="login__container">
            <h1 className="login__sign">Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange=
                {e=>setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
            </form>
            <p>By Signing-in you agree to the Sabka Bazaar terms and conditions
            </p>
            <button onClick={()=>history.push('/register')} className="login__registerButton">Create your Sabka Bazaar Account</button>
        </div>
        
      </div>
    )
}

export default Login
