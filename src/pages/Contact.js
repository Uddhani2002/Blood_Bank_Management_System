import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
const Contact = () => {
  return (
    <>
      <Header />
      <div className="container contact-container">
        <div className="text-center mb-4">
          <h2>Contact With Us</h2>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14575.80131459972!2d79.8606541988092!3d6.8875911595725325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a103d225647%3A0xef1259856066f0bf!2sNational%20Blood%20Centre!5e0!3m2!1sen!2slk!4v1782495420381!5m2!1sen!2slk" width="500" height="450" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
          </div>
          <div className="col-sm-6">
            <div className="form-group" >
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" className='form-control' />  
            </div>
            <div className="form-group mt-4" >
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" className='form-control' />  
            </div>
            <div className="form-group mt-4" >
              <label for="name">Mobile Number:</label>
              <input type="text" id="name" name="name" className='form-control' />  
            </div>
            <div className="form-group mt-4" >
              <label for="message">Message:</label>
              <textarea id="message" name="message" className='form-control' rows="5"></textarea>
            </div>
            <div className="form-group text-center">
              <button type="submit" className='btn btn-danger mt-4'>Submit</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p className='mt-4'><b>Address:</b> 123 Main Street, City, Country</p>
            <p><b>Phone:</b>+1234567890</p>
            <p><b>Email:</b> example@email.com</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;