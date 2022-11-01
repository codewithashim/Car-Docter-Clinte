import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const DashboardLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

export default DashboardLayout;
