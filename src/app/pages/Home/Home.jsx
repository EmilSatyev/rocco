import React from 'react';
import Hero from "../../components/Hero/Hero";
import Popular from "../../components/Popular/Popular";
import Slider from "../../components/Slider/Slider";
import Partners from "../../components/Partners/Partners";
import ContactUs from "../../components/ContactUs/ContactUs";

const Home = () => {
  return (
    <>
      <Hero/>
      <Popular/>
      <Slider/>
      <Partners/>
      <ContactUs/>
    </>
  );
};

export default Home;