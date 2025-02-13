/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  const [isScrolling, setIScrolling] = useState(false);
  function handleScroll() {
    if (window.scrollY >= 20) setIScrolling(true);
    else setIScrolling(false);
  }
  window.addEventListener("scroll", handleScroll);
  return (
    <>
      <nav
        className={`${isScrolling ? "py-6" : "py-10"} bg-[#2C3E50] flex fixed top-0 left-0 right-0 transition-[padding] duration-500 ease-in-out`}

      >
        <div className="container gap-x-5 mx-auto flex justify-between">
          <h1 className="text-3xl inline-block text-white uppercase font-bold">
            <Link to={""}>start framework</Link>
          </h1>
          <ul className="flex-center">
            <li className="text-xl px-3 font-medium text-white">
              <NavLink className="p-2" to={"about"}>
                About
              </NavLink>
            </li>
            <li className="text-xl px-3 font-medium text-white">
              <NavLink className="p-2" to={"portfolio"}>
                Portfolio
              </NavLink>
            </li>
            <li className="text-xl px-3 font-medium text-white">
              <NavLink className="p-2" to={"contact"}>
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
