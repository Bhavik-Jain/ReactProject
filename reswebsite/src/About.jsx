/* eslint-disable jsx-a11y/anchor-is-valid */
import React  from "react";
import web from "../src/images/aboutus.svg";
import Common from "./Common";

const About =() =>{
    return(
      <div>
        <Common 
          name='About Us' 
          imgsrc={web} 
          visit='/contact' 
          btname="Contact Now"/>
      </div>
    );
  };
  
  export default About;