import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../redux/actions/auth.action'


import { FaGoogle } from "react-icons/fa";

import './style.scss'

const LoginScreen = () => {
   const dispatch = useDispatch()

   const accessToken = useSelector(state => state.auth.accessToken)

   const handleLogin = () => {
      dispatch(login())
   }

const navigate = useNavigate();
   useEffect(() => {
      if (accessToken) {
        navigate('/')
      }
   }, [accessToken, history])

   return (
      <div className='login'>
         <div className='login-container'>
            <h2>Youtube Clone</h2>
            <img
               src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
               alt=''
            />
            <button onClick={handleLogin}>Login With google  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" className='googlelogo' /></button>
            <p>This Project is made using <span>YOUTUBE DATA API</span></p>
         </div>
      </div>
   )
}

export default LoginScreen