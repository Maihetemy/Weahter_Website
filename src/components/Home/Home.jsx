/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import Heading from "./../heading/heading";
import homeImage from "../../assets/imgs/avataaars.svg";
export default function Home() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {}, []);
  return (
    <>
      <img src={homeImage} alt="" className="w-1/4 mx-auto" />
      <Heading text={"Start Framework"}></Heading>
      <p className="text-white text-l mt-3">Graphic Artist - Web Designer - Illustrator</p>
    </>
  );
}
