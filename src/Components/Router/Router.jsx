import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../../Layouts/PrimaryLayout";
import Home from "../../Components/Home/Home";
import About from "../../Components/About/About";
import Services from "../../Components/Services/Services";
import Blogs from "../../Components/Blogs/Blogs";
import Contact from "../../Components/Contact/Contact";
import NotFound from "../../Components/NotFound/NotFound";
import Login from "../../Auth/Login/Login";
import Register from "../../Auth/Register/Register";
import ServicesDetails from "../Services/ServicesDetails/ServicesDetails";
import AuthLayout from "../../Layouts/AuthLayout";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Dashboard from "../../Dashboard/Dashboard";
import Checkout from "../Checkout/Checkout";
import PrivetRoute from "./PrivetRoute";
import Orders from "../Orders/Orders";

const route = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryLayout></PrimaryLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/serviceDetails/:id",
        element: <ServicesDetails></ServicesDetails>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/checkout/:id",
        loader: ({ params }) => {
          return fetch(`https://car-rent-server-codewithashim.vercel.app/services/${params.id}`);
        },
        element: (
          <PrivetRoute>
            <Checkout></Checkout>
          </PrivetRoute>
        ),
      },
      {
        path: "/orders",
        element: (
          <PrivetRoute>
            <Orders></Orders>
          </PrivetRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
  // Auth Layout Routes
  {
    path: "/",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
  // Dashboard Layout Routes
  {
    path: "/",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivetRoute>
            <Dashboard></Dashboard>
          </PrivetRoute>
        ),
      },
      // {
      //   path: "/orders",
      //   element: <Orders></Orders>,
      // },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default route;
