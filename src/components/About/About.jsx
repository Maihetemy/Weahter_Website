/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import style from "./About.module.css";
import Heading from "./../heading/heading";
export default function About() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {}, []);
  return (
    <>
      <Heading text={"About"}></Heading>
      <div className="container">
        <div className="row">
          <p className="col text-white text-lg">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="col text-white text-lg">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </>
  );
}
