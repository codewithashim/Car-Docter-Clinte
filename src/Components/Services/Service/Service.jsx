import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Service = ({ service }) => {
  console.log(service);
  const { title, img, _id, price, description } = service;

  return (
    <>
      <div className="serviceCard">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src={img}
              alt={title}
              style={{ width: "100%", height: "250px" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {title} <span className="text-red-500">${price}</span>
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{description.slice(0, 150) + "...."}</p>
          </div>
          <div>
            <Link
              to={`/serviceDetails/${_id}`}
              className="btn btn-warning flex items-center gap-2"
            >
              See More <FaArrowRight></FaArrowRight>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
