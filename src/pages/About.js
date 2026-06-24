import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import donorImage from '../assets/image/donor.jpg';

const About = () => {
  return (
    <>
      <Header />
      <div className="text-center mt-4 mb-4">
        <h3>About Us - Our Bank</h3>
      </div>
      <div className="container">
        <div className="row" style={{ marginBottom: '100px', marginTop: '50px' }}>
          <div className="col-md-6">
            <h4>Our Mission</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis. In hac habitasse platea dictumst. Suspendisse potenti. Sed in libero ut nibh placerat accumsan. Donec vel mauris quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis. In hac habitasse platea dictumst. Suspendisse potenti. Sed in libero ut nibh placerat accumsan. Donec vel mauris quam.
              We are dedicated to providing the best blood banking services to our community. Our mission is to ensure a safe and sufficient blood supply for all those in need.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis. In hac habitasse platea dictumst. Suspendisse potenti. Sed in libero ut nibh placerat accumsan. Donec vel mauris quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis. In hac habitasse platea dictumst. Suspendisse potenti. Sed in libero ut nibh placerat accumsan. Donec vel mauris quam.
              We are dedicated to providing the best blood banking services to our community. Our mission is to ensure a safe and sufficient blood supply for all those in need.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img src={donorImage}  className="about-image" />
          </div>
        </div>
        <div className="row" style={{ marginBottom: '100px', marginTop: '50px' }}>
          <div className="col-md-6 text-center">
            <img src={donorImage}  className="about-image" />
          </div>
          <div className="col-md-6">
            <h4>Our Mission</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis. In hac habitasse platea dictumst. Suspendisse potenti. Sed in libero ut nibh placerat accumsan. Donec vel mauris quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis. In hac habitasse platea dictumst. Suspendisse potenti. Sed in libero ut nibh placerat accumsan. Donec vel mauris quam.
              We are dedicated to providing the best blood banking services to our community. Our mission is to ensure a safe and sufficient blood supply for all those in need.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis. In hac habitasse platea dictumst. Suspendisse potenti. Sed in libero ut nibh placerat accumsan. Donec vel mauris quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis. In hac habitasse platea dictumst. Suspendisse potenti. Sed in libero ut nibh placerat accumsan. Donec vel mauris quam.
              We are dedicated to providing the best blood banking services to our community. Our mission is to ensure a safe and sufficient blood supply for all those in need.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;