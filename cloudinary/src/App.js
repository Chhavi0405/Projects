
import './App.css';
import {useState} from "react"
function App() {
  const[image,setImage] = useState();
  const[url,setUrl] = useState();

  const handleImage=(e)=>{
    console.log(e,"images")
  const data= new FormData()
  data.append ("file",image)
  data.append ("upload_preset","react-images")
  // data.append("cloud_name","di38d1n6d")
  console.log(data)
  fetch("  https://api.cloudinary.com/v1_1/di38d1n6d/image/upload",{
method:"post",
body: data
})
.then(resp => resp.json())
.then(data => {
setUrl(data.url)
})
  }
  

  return (
   <>
  <div>
    <br/>
    <input  type="file" onChange={(e)=>setImage(e.target.files[0])} />
    <br/>
    <br/>
    <button onClick={handleImage}>Upload</button>
  </div>
  {/* <div>
    <h3>Upload image will be displayed here</h3>
    <img src={url} />
  </div> */}
                
   </>
  );
}

export default App;
