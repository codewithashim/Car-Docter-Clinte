import React from "react";
import {
  FaChartBar,
  FaChartPie,
  FaShoppingBasket,
  FaShoppingCart,
  FaSitemap,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

import Headers from "../Components/Header/Header";

const DashboardLayout = () => {
  return (
    <section className="px-4">
      <Headers></Headers>
      <div>
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            <Outlet></Outlet>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-72 text-base-content">
              <li>
                <Link>
                  <FaChartPie></FaChartPie>
                  Overvews
                </Link>
              </li>

              <li>
                <Link>
                  <FaSitemap></FaSitemap>
                  Add Searvices
                </Link>
              </li>
              <li>
                <Link>
                  <FaShoppingBasket></FaShoppingBasket>
                  Manage Services
                </Link>
              </li>
              <li>
                <Link to="/dashboard/orders">
                  <FaShoppingCart></FaShoppingCart>
                  Orders
                </Link>
              </li>
              <li>
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  FAQ
                </Link>
              </li>
              <li>
                <Link>
                  <FaChartBar></FaChartBar>
                  All Items
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
