import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
    <>
    <ul className="navbar" >
        <li><NavLink className="navbarlink" to='/'>Home</NavLink></li>
        <li><NavLink className="navbarlink" to="/signup">SignUp</NavLink></li>
        <li><NavLink className="navbarlink" to="/login">Login</NavLink></li>
        
        <li><NavLink className="navbarlink" to='/product-list'>Product List</NavLink></li>
        <li><NavLink className="navbarlink" to='/list'>List</NavLink></li>
        <li><NavLink className="navbarlink" to='/logout'>Logout</NavLink></li>
        
    </ul>
    </>);
}
 
export default Navbar;
