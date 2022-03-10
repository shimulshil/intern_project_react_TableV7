import React from 'react';
import Alljob from './component/alljob';
import pic from "./image/Logo.png";

const App=()=> {
  return (
    <div className="App">
      <span><img src={pic} /></span>
      <h2 style={{textAlign: "center",fontSize: "30px"}}>Hexagon Distribution System</h2>
      <span className="title" style={{textAlign: "left",fontSize: "20px",fontWeight:"bolder"}}> All Jobs information</span> <br />
      <Alljob/>
    </div>
  );
}


export default App;
