
import About from "./components/About";
import HomePage from "./components/HomePAge";
import SignUp from "./components/signUp"
import Login from  "./components/login"
import ReviewUS from "./components/ReviewUS";
import Contact from "./components/Contact";
export default function Home() {
  
  return (
    <>
    <h2 className='text-center'>Change Language</h2>
    <div>
<HomePage/>
<About/>
<SignUp/>
<Login/>
<ReviewUS/>
<Contact/>


       </div>
    </>
  )
}
