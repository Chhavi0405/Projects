import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const navigate = useNavigate()
const getValue=localStorage.getItem('token')
console.log(getValue,"tokenvalue")

  const handleLogin = () => {
  
    const storedUser = JSON.parse(localStorage.getItem('user'));
    // const storedPassword = storedUser ? storedUser.password : '';


    if (email === storedUser.email && password === storedUser.password) {
      
    if(getValue==='chhavi@123456') 
    
    {  navigate('/product-list')
      
    }
  }
     else  {
      
      alert('Login failed. Please check your credentials.');

    }
  
    
  };

 

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;
