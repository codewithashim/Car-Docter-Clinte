import React from "react";
// import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { product_id, product_name, product_price, product_image } = product;
  return (
    <>
      <section>
        <div
          className="card w-72 bg-base-200  mx-auto shadow-xl"
          style={{ height: "389px" }}
        >
          <figure>
            <img
              src={product_image}
              alt={product_name}
              className="w-4/6 pt-4 h-48"
            />
          </figure>
          <div className="card-body mx-auto p-4">
            <div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
            <h2 className="card-title">{product_name}</h2>
            <h3>
              Price{" "}
              <div className="badge badge-secondary">$ {product_price}</div>{" "}
            </h3>
            <div className="card-actions">
              <Link
                to={`/checkout/${product_id}`}
                className="btn btn-warning btn-sm"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
