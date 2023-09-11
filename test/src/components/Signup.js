import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const[name,setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate= useNavigate()

  const isToken = "chhavi@123456"
  const isGuestToken = "moni@1234"
  localStorage.setItem('guestToken', isGuestToken);
  const handleSignup = () => {
    
    const user = {
      name,
      email,
      password,
    };

    
    localStorage.setItem('user', JSON.stringify(user));
   
   
    localStorage.setItem('token', isToken);
    alert('succesfully SignUp.');
    navigate('/product-list')
    localStorage.removeItem("guestToken");
  };

  return (
    <div>
      <h2>Signup</h2>
      <form>
      <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
 <br/>
        <br/>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
 <br/>
<br/>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

<br/>
<br/>
        <button onClick={handleSignup}>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;