import React from "react";
import Nav from "../Componant/Navbar/Nav";
import Hero from "../Componant/Hero/Hero";
import AboutHss from "../Componant/AboutHss/AboutHss";
import ServicesData from "../Componant/Services/ServicesData";
import SecurityData from "../Componant/SecurityTrust/SecurityData";
import SocialMedia from "../Componant/SocialMedia/SocialMedia";
import NewsData from "../Componant/News/NewsData";
import Reivews from "../Componant/Reivews/Reivews";
import Footer from "../Componant/Footer/Footer";
function Home() {
  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <AboutHss></AboutHss>
      <ServicesData></ServicesData>
      <SecurityData></SecurityData>
      <SocialMedia></SocialMedia>
      <NewsData></NewsData>
      <Reivews></Reivews>
      <Footer></Footer>
    </>
  );
}

export default Home;
