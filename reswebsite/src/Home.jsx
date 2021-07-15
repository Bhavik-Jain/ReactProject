/* eslint-disable jsx-a11y/anchor-is-valid */
import React  from "react";
import web from "../src/images/1.svg";
import Common from "./Common";

const Home =() =>{
    return(
      <div>
        <Common 
          name = "Grow your business with"
          imgsrc = {web} 
          visit='/service' 
          btname="Get Started"/>
      </div>
    );
  };
  
  export default Home;