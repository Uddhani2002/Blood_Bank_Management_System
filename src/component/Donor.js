import React from "react";
import DonorImage from "../assets/image/donor.jpg";
const Donor = () => {
  return (
    <div className="row" style={{marginTop: '20px', marginBottom: '20px'}}>
      <div className="col-sm-6">
        <div className="text-center">
            <h2>Become a Donor</h2>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className="col-sm-6">
        <img class="card-img-top" src={DonorImage} style={{width: '100%'}} alt="..."/>
      </div>
    </div>
  );
};

export default Donor;