import React, { useEffect, useState } from "react";
import { useParams, Link,useNavigate} from "react-router-dom";

export default function User() {
  const params = useParams();
  // console.log("params", params);
  const { id } = params;
  const [posts, setPosts] = useState();
  // const [productItem,setProductItem]= useState(sessionStorage.getItem("product"))
  const sessionId = sessionStorage.getItem("product")
  // console.log(sessionId,"productidsss")

  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        
        setPosts(data);
      });
  }, [id]);
 
  // const handleNavigate=()=>{
  //   navigate('/product-list')
  // }

 
  return posts &&(sessionId !== null)? (
    <>
      <div>
        <img src={posts.image}alt="images" />
        <h2>{posts && posts.title}</h2>
        <p>{posts && posts.price}</p>
      </div>

      <Link to="/">Go to Home page</Link>
      
    </>
  ) : (
    // <h2>Loading...</h2>
    // <button onClick={handleNavigate}> click here!!</button>
    navigate('/product-list')
   
  );
 
}

