import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  const navigate = useNavigate();

  const {login, user} = useContext(AuthContext);
  const onlogin = () =>{
    login('Luis Palacios')
    navigate('/',{
      replace:true
    })



  }
  return (
    <>
      <div className='container mt-5'>

        <h1>Login</h1>

        <hr />

        <button className='btn btn-primary' onClick={onlogin}>
          Login
        </button>


      </div>
    
    </>
  )
}
