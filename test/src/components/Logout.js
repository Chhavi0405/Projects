import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
    // const getValue=localStorage.getItem('token')
    const navigate = useNavigate()
    const logout=()=>{
        localStorage.removeItem("token") 
        localStorage.removeItem("user")
        sessionStorage.removeItem("product")
          navigate('/')
          return null;
        
        // navigate('/')
      }
  return (
   <>
   <button onClick={logout}>logout</button>
   </>
  )
}

export default Logout