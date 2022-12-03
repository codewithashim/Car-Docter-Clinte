import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import checkOut from "../../Assets/images/checkout/checkout.png";
import { AuthContext } from "../../Context/UserContext";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const services = useLoaderData();
  const service = services.data;
  console.log(service);
  const { title, _id, price, img } = service;

  const hendelSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = `${form.fristName.value} ${form.lastName.value}`;
    const name = form.fullName.value;
    const phone = form.phone.value;
    const email = user?.email.value || form.email.value;
    const order = {
      phone,
      email,
      price,
      service: _id,
      customar: name,
      serviceName: title,
    };

    fetch("https://car-rent-server-codewithashim.vercel.app/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        // const order = data.data;
        if (data.success) {
          Swal.fire(
            "Succesfully Confirme Order",
            "You clicked the button!",
            "success"
          );
        } else {
          Swal.error("Something went wrong");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <section className="p-8">
        <div className="checkoutHeader flex flex-col justify-center">
          <img src={checkOut} alt="Checkout" style={{ zIndex: "-1110" }} />
          <div style={{ marginTop: "-5rem" }}>
            <h1 className="text-3xl text-center font-bold">Checkout</h1>
          </div>
        </div>
        <div className="p-5 mt-6">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <Link to="/services">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 mr-2 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    ></path>
                  </svg>
                  Searvices
                </Link>
              </li>
              <li>
                <Link to="/orders">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 mr-2 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    ></path>
                  </svg>
                  Orders
                </Link>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-2 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
                Checkout
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20">
          <div className="userInfo my-4">
            <div>
              <div className="alert alert-warning shadow-lg">
                <div>
                  <span>
                    {" "}
                    <p className="text-xl font-bold text-center">
                      {`Hey Well Come ${user?.displayName}`}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="orderInfo my-4 flex p-3 rounded w-2/4 mx-auto shadow-xl gap-4 flex-col border">
              <h2 className="text-3xl ">{`${user?.displayName} You are going to order ${title}`}</h2>
              <h3 className="text-2xl text-lefe">{`Price: $ ${price}`}</h3>
              <figure className="flex gap-4 item-center">
                <img
                  src={img}
                  alt={title}
                  className="rounded"
                  style={{ width: "100%", height: "15rem", objectFit: "cover" }}
                />
              </figure>
            </div>
          </div>
        </div>
        <div>
          <form action="" onSubmit={hendelSubmit}>
            <div className="grid md:grid-cols-2 w-3/4 justify-center mx-auto gap-4">
              <input
                type="text"
                name="fullName"
                required
                placeholder="Your Name"
                className="input input-bordered input-warning w-full max-w-xs"
              />{" "}
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                defaultValue={user.email}
                readOnly
                className="input input-bordered input-warning w-full max-w-xs"
              />
              <input
                type="number"
                name="phone"
                required
                placeholder="Enter Your Phone Number"
                className="input input-bordered input-warning w-full max-w-xs"
              />
              <div>
                <textarea
                  name="message"
                  className="textarea w-full textarea-warning"
                  placeholder="Write Your Message"
                ></textarea>
              </div>
              <div className="">
                <input
                  type="submit"
                  value="Order Confirm"
                  className="btn btn-outline"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Checkout;
