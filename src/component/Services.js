import React from "react";
import helpImage from "../assets/image/help.png";
const Services = () => {
  return (
    <div className="services-container">
    <div className="text-center">
      <h1 className="services-title">Our Services</h1>
    </div>
    <div className="row">
      <div className="col-sm-3 text-center">
        <div class="card" style={{marginLeft: '10px'}}>
        <div className="text-center">  
            <img class="card-img-top" src={helpImage} style={{height: '100px', width: '100px'}} alt="..."/>
        </div>
        <div class="card-body">
            <h5 class="card-title">Services 1</h5>
        </div>
        </div>
      </div>
      <div className="col-sm-3 text-center">
        <div class="card" style={{marginLeft: '10px'}}>
        <div className="text-center">  
            <img class="card-img-top" src={helpImage} style={{height: '100px', width: '100px'}} alt="..."/>
        </div>
        <div class="card-body">
            <h5 class="card-title">Services 1</h5>
        </div>
        </div>
      </div>
      <div className="col-sm-3 text-center">
        <div class="card" style={{marginLeft: '10px'}}>
        <div className="text-center">  
            <img class="card-img-top" src={helpImage} style={{height: '100px', width: '100px'}} alt="..."/>
        </div>
        <div class="card-body">
            <h5 class="card-title">Services 1</h5>
        </div>
        </div>
      </div>
      <div className="col-sm-3 text-center">
        <div class="card" style={{marginRight: '10px'}}>
        <div className="text-center">  
            <img class="card-img-top" src={helpImage} style={{height: '100px', width: '100px'}} alt="..."/>
        </div>
        <div class="card-body">
            <h5 class="card-title">Services 4</h5>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;