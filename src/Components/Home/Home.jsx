import React from "react";
import "./Style//Home.css";
import Hero from "./Hero/Hero";
import About from "../About/About";
import Services from "../Services/Services";
import Event from "../Event/Event";
import Poroducts from "../Products/Poroducts";
import Team from "../Team/Team";

const Home = () => {
  return (
    <>
      <section>
        <Hero></Hero>
        <About></About>
        <Services></Services>
        <Event></Event>
        <Poroducts></Poroducts>
        <Team></Team>
      </section>
    </>
  );
};

export default Home;
