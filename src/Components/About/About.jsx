import React from "react";
import person from "../../Assets/images/about_us/person.jpg";
import parts from "../../Assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <>
      <section>
        <div className="hero min-h-screen bg-base-200 py-6">
          <div className="hero-content flex-col lg:flex-row">
            <div className="md:w-2/4 relative border">
              <img src={person} alt="Person" className="w-4/5 h-full rounded" />
              <img
                src={parts}
                alt="Person"
                className="rounded absolute w-3/5 right-5 top-2/4"
              />
            </div>
            <div className="md:w-2/4 my-5">
              <h1 className="text-3xl text-red-500 font-bold mb-4">About Us</h1>
              <h1 className="text-3xl w-fit md:text-5xl font-bold">
                We are qualified & of experience in this field
              </h1>
              <p className="py-4 w-full">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <p className="py-4">
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable.
              </p>
              <button className="btn btn-warning">Get More Info</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
