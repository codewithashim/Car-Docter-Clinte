import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Dashboard from "../Dashboard/Dashboard";

const DashboardLayout = () => {
  return (
    <>
      <Header></Header>
      <Dashboard></Dashboard>
      <Outlet></Outlet>
    </>
  );
};

export default DashboardLayout;
