import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (<div className="row">
    <div className="col-sm-4">
        <div className="text-center">
            <h2>Usefull Links</h2>
        </div>
        <div className="text-center">
            <ul className="usefull-link">
            <li><Link to={'/'}>Link1</Link></li>
            <li><Link to={'/'}>Link2</Link></li>
            <li><Link to={'/'}>Link3</Link></li>
            </ul>
        </div>
    </div>
    <div className="col-sm-4">
        <p style={{color:'red',fontWeight:'bold',marginTop:'10px'}}>Contact Information</p>
        <p>123 Main Street, City, Country</p>
        <p>Email : example@email.com</p>
        <p>Phone : +1234567890</p>
    </div>
    <div className="col-sm-4">
        <p style={{color:'red',fontWeight:'bold',marginTop:'10px'}}>Follow Us</p>
        <p>Facebook : facebook.com/example</p>
        <p>Twitter : twitter.com/example</p>
        <p>Instagram : instagram.com/example</p>
    </div>
  </div>

  );
};

export default Footer;