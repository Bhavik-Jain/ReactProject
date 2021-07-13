/* eslint-disable jsx-a11y/anchor-is-valid */
import React  from "react";

const Home =() =>{
    return(
      <div>
        <section className="d-flex align-items-center" id="header">
          <div className="container-fluid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Grow Your Business With <strong className="brand-name">Alpha Creation</strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of smart developers 
                  </h2>
                  <div className="mt-3">
                    <a href="" className="btn btn-outline-info"> 
                    Get Started 
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Home;