/* eslint-disable jsx-a11y/anchor-is-valid */
import React  from "react";
import { NavLink } from "react-router-dom";

const Common =(props) =>{
    return(
      <div>
        <section className="d-flex align-items-center" id="header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 para order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>
                      {props.name}
                      <strong className="brand-name"> Alpha Creation's</strong>
                    </h1>
                    <h2 className="my-3">
                      We are the team of Talented developers 
                    </h2>
                    <div className="mt-3">
                      <NavLink to={props.visit} className="btn-get-started "> 
                      {props.btname} 
                      </NavLink>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src={props.imgsrc} className="img-fluid animated" alt=""/>
                  </div>
                </div>  
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Common;