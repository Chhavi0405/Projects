import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const isGuestToken = "moni@1234";
  const getValue=localStorage.getItem('token')

const navigate= useNavigate();

  if (getValue !=='chhavi@123456') {
   
    localStorage.setItem("guestToken", isGuestToken);
    alert("guesttoken");
  }

  
  useEffect(() => { if(localStorage.getItem('guestToken'))
    {setTimeout(() => {
      navigate('/')
    }, 2000)}
  }, [])

  if(getValue !=='chhavi@123456'){
    navigate('/User')
  }

  return (
    <>
      <p>Home Page</p>
    </>
  );
}

export default HomePage;
