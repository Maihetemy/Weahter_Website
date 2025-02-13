/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import style from "./Heading.module.css";
import { useLocation } from "react-router-dom";
export default function Heading({ text }) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {}, []);
  const { pathname } = useLocation();
  return (
    <>
      <h1
        className={`${style.heading} text-5xl font-bold ${
          pathname === "/portfolio" || pathname === "/contact"
            ? "main-color"
            : "text-white"
        } uppercase`}
      >
        {text}
      </h1>
      <div className=""></div>
    </>
  );
}
