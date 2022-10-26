import React, { useEffect, useRef, useState } from "react";
import Anime from "../../asset/Anime";

export default function Visual() {
  let [Count2, setCount2] = useState(0);

  // useEffect(() => {
  //   let id = setInterval(() => {
  //     setCount2(Count2 + 1);
  //   }, 50);
  //   return () => {
  //     clearInterval(id);
  //   };
  // }, [Count2]);

  return (
    <figure id="visual" className="myScroll">
      <div className="title">
        <ul>
          <li>B</li>
          <li>u</li>
          <li>g</li>
          <li>a</li>
          <li>t</li>
          <li>t</li>
          <li>i</li>
        </ul>
        <ul>
          <li>B</li>
          <li>o</li>
          <li>l</li>
          <li>i</li>
          <li>d</li>
          <li>C</li>
          <li>o</li>
          <li>n</li>
          <li>c</li>
          <li>e</li>
          <li>p</li>
          <li>t</li>
        </ul>

        <p className="text_wrap">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
          molestiae velit, temp
        </p>

        <div className="btn">VIEW MORE</div>
      </div>

      <ul className="number_wrap">
        <li>
          <span>{Count2}</span>MPH
        </li>

        <li>
          <span>{Count2}</span>S
        </li>

        <li>
          <span>{Count2}</span>L
        </li>
      </ul>

      <img src={process.env.PUBLIC_URL + "/img/visual/visual_01.png"} />
    </figure>
  );
}
