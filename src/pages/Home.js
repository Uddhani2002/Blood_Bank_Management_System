import React from "react";
import Header from "../component/Header";
import Banner from "../component/Banner";
import Services from "../component/Services";
import Donor from "../component/Donor";
import Footer from "../component/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <Donor />
      <Footer />
    </>    
  );
};

export default Home;