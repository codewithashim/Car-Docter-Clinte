import React from "react";
import { Link } from "react-router-dom";
import "../Style/Home.css";

const Slider = ({ slide }) => {
  console.log(slide);
  const { image, prev, id, next } = slide;

  return (
    <>
      <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className="sliderImage ">
          <img src={image} className="w-full" alt="Slider" />
        </div>
        <div className="absolute flex gap-4 mr-8 transform -translate-y-1/2 right-0 bottom-0">
          <a href={`#slide${prev}`} className="btn btn-circle mr-5">
            ❮
          </a>
          <a href={`#slide${next}`} className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute flex gap-4 transform -translate-y-1/2 left-0 top-1/2 pl-5">
          <div>
            <h1 className="text-6xl font-bold text-white">
              Affordable <br /> Price For <br /> Car Servicing
            </h1>
            <p className="mt-4 text-white w-3/4">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4 mt-6">
              <Link className="btn btn-warning">Discover More</Link>
              <Link className="btn btn-warning btn-outline">
                Latest Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
