import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const DonorRequest = () => {
  return (
    <>
      <Header />
      <div style={{ background: 'rgb(232, 213, 213)', paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="container">
          <div className="text-center">
            <h2>Become a Donor</h2>
          </div>
          <div className="card" style={{ padding: '10px', marginTop: '20px' }}>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group mt-4" >
                  <label htmlFor="name">Name:</label>
                  <input type="text" placeholder="Enter Your Name" className="form-control" id="name" />
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="email">Email:</label>
                  <input type="email" placeholder="Enter Your Email" className="form-control" id="email" />
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="phone">Phone:</label>
                  <input type="text" placeholder="Enter Your Phone Number" className="form-control" id="phone" />
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="phone">Blood group:</label>
                  <input type="text" placeholder="Enter Your Blood group" className="form-control" id="phone" />
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="phone">Remarks:</label>
                  <textarea className="form-control"></textarea>               
                </div>
                <div className="form-group mt-4">
                  <button className="btn btn-danger">Submit Request</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DonorRequest;