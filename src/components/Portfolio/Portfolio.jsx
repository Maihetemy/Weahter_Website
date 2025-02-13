/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import style from "./Portfolio.module.css";
import Heading from "./../heading/heading";
export default function Portfolio() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {}, []);
  const images = Object.values(
    import.meta.glob(
      "../../assets/imgs/Portfolio/*.{png,jpg,jpeg,gif,svg,webp}",
      { as: "url", eager: true }
    )
  );
  let [isOpening, setIsOpening] = useState(false);
  let [image, setImage] = useState("");
  return (
    <>
      <Heading text={"Portfolio"}></Heading>
      <div className="container">
        <div className="row">
          {images.map((image, index) => (
            <div
              onClick={(e) => {
                setIsOpening(true);
                console.log(isOpening);

                setImage(e.target.src);
                console.log(e.target.src);
              }}
              key={index}
              className="col p-3"
            >
              <img
                className="w-full rounded cursor-pointer"
                src={image}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      {isOpening && (
        <div className="fixed top-0 left-0 right-0 h-full w-full flex-center">
          <div onClick={() => setIsOpening(false)} className="main-bg-color opacity-30 h-full w-full absolute"></div>
          <img className="w-1/2 z-30 relative" src={image} alt="" />
        </div>
      )}
    </>
  );
}
