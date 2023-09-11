import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate ,useLocation} from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();
  const [prod, setProd] = useState([]);
  // sessionStorage.setItem("product",JSON.stringify(prod))
 
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProd(json));
  }, []);
  // console.log("product is get",prod);
  const isGuestToken = "moni@1234";
  const getValue = localStorage.getItem("token");


  if (getValue !== "chhavi@123456") {
    localStorage.setItem("guestToken", isGuestToken);
    // alert("guesttoken");
  }

  useEffect(() => {
    if (localStorage.getItem("guestToken")) {
      setTimeout(() => {
        navigate("/");
        alert("First signUp / Login ")
      }, 2000);
    }
  }, []);

  const handleValue = (data) => {
    sessionStorage.setItem("product", JSON.stringify(data));
   let pathname= (`/user/${data.id}`);
  //  console.log(`${encodeURIComponent(pathname)}`,"pathname")


  //  let pathname = (`/user/${encodeURIComponent(data.id)}`)
    // navigate(`${encodeURIComponent(pathname)}`)
 navigate(`${encodeURIComponent(pathname)}`)
 
  // console.log("pat",pathname)
  navigate(pathname)
    // console.log(data, "data");
  };
  



  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Product List</h2>
      <table border="2 px">
        <tbody>
          <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Description</td>
          </tr>
          {prod.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td onClick={() => handleValue(item)}>{item.title}
                {/* <Link to={`/user/${item.id}`}>{item.title}</Link>{" "} */}
                {/* <button onClick={() => handleValue(item)}>{item.title}</button> */}
              </td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <NavLink to="list" />
    </div>
  );
};

export default ProductList;
