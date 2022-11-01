import React from "react";
import "./Style//Home.css";
import Hero from "./Hero/Hero";
import About from "../About/About";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <section>
        <Hero></Hero>
        <About></About>
        <Services></Services>
      </section>
    </>
  );
};

export default Home;
