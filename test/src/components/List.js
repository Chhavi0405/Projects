import React, { useEffect, useState } from "react";

const List = () => {
 
  const [data, setData] = useState([]);
  const itemsNum = sessionStorage.getItem("product")
  const item = useState(itemsNum)

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts/5")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
 let qwerty =JSON.stringify(item[0])

//  var res = Object.entries(item).map(([k, v]) => ([Number(k), v]));

// console.log(qwerty,"stringify")
// console.log(qwerty.id,"id")
 

const array =[
 { name:"qwerty",
    id:1,
   add:"delhi",
   status:"pending"

  },
  { name:"asdf",
    id:2,
   add:"dmrt",
   status:"not done"

  },
  { name:"zxc",
    id:3,
   add:"mrd",
   status:"done"

  },

]
console.log(array,"array")

// const array1 =[
//   { 
//    status:["done","completed"],
  
//    }
 
//  ]

// console.log(array1,"array1")

const arrayData = [
  { name: "qwerty", id: 23, address: [{ street: "md", location: "muradnagar" }] },
  { name: "A", id: 24, address: [{ street: "mg", location: "new delhi" }] },
  { name: "b", id: 25, address: [{ street: "del", location: "delhi" } ]},
  { name: "c", id: 26, address: [{ street: "gzb", location: "ghaziabad" }] },
  { name: "d", id: 27, address: [{ street: "mrt", location: "meerut" }] },
  { name: "f", id: 28, address: [{ street: "vai", location: "vaishali" },
                                { street: "v", location: "shali" }] },
];

// let copyarray = arrayData
let arr2 =arrayData.map((data)=>
{return({...data},data.address.map((item)=>{
    return {...item,key :false}
} )
)})

// console.log(arr2)

let arr1 = arrayData.map((data)=>{return({...data})})
console.log(arr1,"arr")

let arr =[
  {
    name:"John",
    status:"Done",
    id:1
  },
  {
    name:"Smith",
    status:"Not Completed",
    id:3
  },
  {
    name:"Peter",
    status:"Not Completed",
    id:5
  },
  {
    name:"Roy",
    status:"Done",
    id:4
  },
  {
    name:"Ramesh",
    status:"Not Completed",
    id:2
  }


]
console.log(arr)

  return (
    <div>
      <p>{JSON.stringify(item[0])}</p>
     {/* { (Object.entries(item).map((i)=>{ console.log(i[0],"data")
      return(
        i)}))} */}
        {/* {Object.values(item[0])} */}
    </div>
  );
};

export default List;
