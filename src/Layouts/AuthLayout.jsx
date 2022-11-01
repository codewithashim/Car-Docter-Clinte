import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const LoginLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

export default LoginLayout;
