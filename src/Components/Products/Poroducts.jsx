import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product/Product";

const Poroducts = () => {
  const [products, setProducts] = useState([]);
  const [viseble, setViseble] = useState(3);
  useEffect(() => {
    return () => {
      fetch("products.json")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    };
  }, []);

  const hendelMoreProduct = () => {
    setViseble(viseble + 3);
  };

  return (
    <>
      <section>
        <div className="productTitle flex justify-center items-center flex-col p-4">
          <h3 className="text-2xl font-bold text-red-600 text-center">
            Popular Products
          </h3>
          <h1 className="text-5xl my-2 font-bold text-center">
            Browse Our Products
          </h1>
          <p className="text-center w-3/4">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
        <div className="productsContaint grid gap-4 md:grid-cols-3 py-6">
          {products.slice(0, viseble).map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
        <div className="seeMore flex justify-center my-4">
          <Link
            className="btn-warning btn btn-outline"
            onClick={hendelMoreProduct}
          >
            More Products
          </Link>
        </div>
      </section>
    </>
  );
};

export default Poroducts;
