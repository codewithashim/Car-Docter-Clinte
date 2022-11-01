import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Service from "./Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const [viseble, setViseble] = useState(6);
  const showMore = () => {
    setViseble(viseble + 3);
  };

  useEffect(() => {
    return () => {
      fetch("services.json")
        .then((res) => res.json())
        .then((data) => setServices(data));
    };
  }, []);

  return (
    <>
      <section>
        <div className="servicesTitle text-center flex flex-col pb-4 gap-4 items-center justify-center">
          <h1 className="text-3xl text-red-500 font-bold">Services</h1>
          <h1 className="text-4xl md:text-5xl font-bold">Our Service Area</h1>
          <p className="w-3/4">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
        <div className="ourServices p-6">
          <div className="mx-auto grid gap-6 md:grid-cols-3">
            {services.slice(0, viseble).map((service) => (
              // display few services
              <Service key={service.id} service={service}></Service>
            ))}
          </div>
        </div>
        <div className="mb-4 flex justify-center items-center">
          <Link
            onClick={() => showMore()}
            className="btn justify-center max-w-fit btn-outline btn-warning flex items-center gap-3"
          >
            More Services <FaArrowRight></FaArrowRight>{" "}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
