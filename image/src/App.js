import './App.css';

// 1. Import classes
// ==================

import React from 'react'
import {Cloudinary} from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";
import {compass,Gravity} from "@cloudinary/url-gen/qualifiers/gravity";
import {AdvancedImage,  responsive,accessibility} from '@cloudinary/react';
// Import any actions required for transformations.

const App = () => {


  // 2. Set your cloud name
  //========================

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'di38d1n6d'
    }
  });


  // 3. Get your image
  //===================

  // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
  // const myImage = cld.image('di38d1n6d1'); 
  const myImage = cld.image('samples/animals/three-dogs'); 
 
  // 4. Transform your image
  //=========================

  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  // myImage.resize(fill().height(400));


  // 5. Deliver your image
  // ={display:'block',marginLeft:'auto',marginRight:'auto',marginTop:'30 px'========================

  // Render the image in a React component.
  return (
    <div className="App-body">
      {/* <h1>React Quick Start</h1> */}
      <div >
        <br/>
      <AdvancedImage style={{display:'block',marginLeft:'auto',marginRight:'auto'}}  cldImg={myImage} plugins={[responsive({steps: [1200]})]} />
      </div>
      {/* <img  sizes='100vw' src='https://res.cloudinary.com/di38d1n6d/image/upload//c_thumb,w_720,g_auto/v1694174681/lqaauhiojsiatimaape4.jpg' alt='tiger'/> */}
    </div>
  )

};

export default App;
