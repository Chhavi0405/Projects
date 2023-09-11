
import './App.css';
import {useState} from "react"

import {fill} from "@cloudinary/url-gen/actions/resize";
function App() {
  const[image,setImage] = useState();
  const[url,setUrl] = useState();
  const [size,setSize]= useState()

  const handleImage=(e)=>{
    console.log(e,"images")
  const data= new FormData()
  data.append ("file",image)
  data.append ("upload_preset","react-images")
  data.append("cloud_name","di38d1n6d")
  console.log(data)
  fetch("  https://api.cloudinary.com/v1_1/di38d1n6d/image/upload",{
method:"post",
body: data
})
.then(resp => resp.json())

.then(data => {
// setSize(data.resize(fill().width(250).height(250)))
setUrl(data.url)
console.log(data.url,"url",data.height,data.width)
})
  }
  

  return (
   <>
  <div>
    <br/>
    <input  type="file"  accept=".jpg, .jpeg, .png"  onChange={(e)=>setImage(e.target.files[0])} />
    <br/>
    <br/>
    <button onClick={handleImage}>Upload</button>
    {/* <AdvancedImage  /> */}
  </div>
  <div>
    <h3>Upload image will be displayed here</h3>
   <img src={url} alt='image' />
  </div>
                
   </>
  );
}

export default App;
