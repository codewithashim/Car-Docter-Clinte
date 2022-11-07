import React from "react";
import {
  FaChartBar,
  FaChartPie,
  FaShoppingBasket,
  FaShoppingCart,
  FaSitemap,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardSideNav = () => {
  return (
    <nav>
      <ul className="menu bg-base-100 w-56 p-2 rounded-box">
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
          <Link to="/order">
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
    </nav>
  );
};

export default DashboardSideNav;
