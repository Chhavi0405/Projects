import './App.css';
import Navbar from './components/Navbar';
import {  Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from './components/HomePage';

import Home from './components/Home'
import List from './components/List';
import ProductList from './components/ProductList';
import User from './components/User';
import Logout from './components/Logout';
function App() {
  return (
   <>

<Navbar/>

    <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<Signup />} />
        <Route path="homepage" element={<HomePage />} />
        <Route path="list" element={<List />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path='/user/:id' element={<User/>}/>
        <Route path='/logout' element={<Logout/>}/>
    </Routes>
    
</>
  );
}

export default App;
