import React, { useState }  from "react";

const Contact =() =>{
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) =>{
    const {name, value} = event.target;
    
    setData((preVal) => {
      return{
        ...preVal,
        [name] : value,
      };
    });
  };

  function formSubmit(e){
    e.preventDefault();
    alert(`Name: ${data.name} Phone: ${data.phone} Email: ${data.email} Message: ${data.msg}`);
  };
    
    return(
      <div>
        <div className="my-5">
          <h1 className="text-center"> Contact Us </h1>
        </div>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Full Name*</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    required id="exampleFormControlInput1" 
                    name="name" 
                    value={data.name} 
                    onChange={InputEvent} 
                    placeholder="Enter Your Name" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Phone*</label>
                  <input 
                    type="number" 
                    class="form-control" 
                    required id="exampleFormControlInput1" 
                    name="phone" 
                    value={data.phone} 
                    onChange={InputEvent} 
                    placeholder="Phone Number" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email*</label>
                  <input 
                    type="email" 
                    class="form-control" 
                    required id="exampleFormControlInput1" 
                    name="email" 
                    value={data.email} 
                    onChange={InputEvent} 
                    placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Message*</label>
                  <textarea 
                    class="form-control" 
                    required id="exampleFormControlTextarea1" 
                    name="msg" 
                    value={data.msg} 
                    onChange={InputEvent} 
                    rows="3">
                  </textarea>
                </div>
                <div class="col-12">
                  <button class="btn btn-outline-primary" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;