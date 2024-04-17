import React from 'react'
import {Button} from "@mui/material"
import {auth,provider} from '../../firebase'
import { signInWithPopup } from 'firebase/auth'
import "./Login.css"
import { useStateValue } from '../ContextApi/StateProvider'
import { actionTypes } from '../ContextApi/reducer'

const Login = () => {
  const[state,dispatch]=useStateValue()
    const signIn = () =>{
     signInWithPopup(auth,provider)
     .then((result)=> {
        dispatch({
          type:actionTypes.SET_USER,
          user:result.user
        })
     })
     .catch((err) => {
        alert(err.message);
     })
    }
  return (
    <div className='login'>
      <div className='login__container'>
        <img
        src='https://as2.ftcdn.net/v2/jpg/02/23/21/45/1000_F_223214507_mocKVnVwSHgiwJSx6lGqh0rr1penAqJm.jpg'
        alt='logo'
        />
        <div className='login__text'>
            <h1>sign in to chatapps</h1>
</div>
        <Button onClick={signIn}>sign in with Google</Button>
        </div>  
    </div>
  )
}
export default Login