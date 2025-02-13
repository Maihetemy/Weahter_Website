/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import style from "./Layout.module.css";
import Navbar from "./../Navbar/Navbar";
import Footer from "./../Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Layout() {
  let { pathname } = useLocation();
  console.log(pathname);

  return (
    <>
      <Navbar />
      <div
        className={`flex-center min-h-dvh ${
          pathname === "/" || pathname === "/about" ? "bg-[#1ABC9C]" : ""
        }`}
      >
        <div className="container text-center mt-32">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer />
    </>
  );
}
