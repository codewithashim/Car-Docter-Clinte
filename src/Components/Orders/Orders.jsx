import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/UserContext";
import OrderRow from "./OrderRow/OrderRow";

const Orders = () => {
  const { user, logout } = useContext(AuthContext);
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logout();
          // throw new Error("Unauthorized");
        }
        return res.json();
      })
      .then((data) => {
        setOrder(data);
        console.log(data);
      });
  }, [user?.email, logout]);

  // console.log(data.orders , "im from orders");

  const hendelDelete = (_id) => {
    const procide = window.confirm(
      "Are you sure you want to delete this order?"
    );

    if (procide) {
      fetch(`http://localhost:5000/deleteOrder/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            Swal.fire(
              "Succesfully Delete Order",
              "You clicked the button!",
              "success"
            );
            const remeingingOrder = orders.filter((order) => order._id !== _id);
            setOrder(remeingingOrder);
          }

          // if (data.deletedCount > 0) {
          //   Swal.fire(
          //     "Succesfully Delete!",
          //     "You clicked the button!",
          //     "success"
          //   );
          //   alert("Succesfully Delete!");
          //   const remeingingOrder = orders.filter((order) => order._id !== _id);
          //   setOrder(remeingingOrder);
          // }
        });
    }
  };

  return (
    <>
      <section className="p-8">
        <div className="checkoutHeader flex flex-col justify-center">
          <h2>You Have Total Order {orders?.length}</h2>
        </div>
        <div className="p-5">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <Link to="/">
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
                  Home
                </Link>
              </li>
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
                  Services
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
                Orders
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Name</th>
                  <th>Searvice Name</th>
                  <th>Price</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => {
                  return (
                    <OrderRow
                      order={order}
                      key={order?._id}
                      hendelDelete={hendelDelete}
                    ></OrderRow>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Orders;
