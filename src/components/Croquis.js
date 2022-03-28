import React, { useRef, useEffect } from "react";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import croquis from "../assets/Croquis1.png";

gsap.registerPlugin(ScrollTrigger);

function Croquis() {
  let titleCroquisItem = useRef(null);
  let croquisItem = useRef(null);

  useEffect(() => {
    gsap.from(titleCroquisItem, {
      scrollTrigger: {
        trigger: titleCroquisItem,
        start: " 80%",
        toggleActions: "play none none reverse",
      },
      duration: 2,
      opacity: 0,
      y: 200,
      ease: Power2.easeInOut,
    });
    gsap.from(croquisItem, {
      scrollTrigger: {
        trigger: croquisItem,
        start: " 80%",
        toggleActions: "play none none reverse",
      },
      duration: 2,
      opacity: 0,
      y: 200,
      delay:.5,
      ease: Power2.easeInOut,
    });
  },[]);
  return (
    <div className=" flex flex-col pb-10 items-center md:h-[90vh] ">
      <h3 ref={el => titleCroquisItem = el} className="p-4 text-3xl font-extrabold leading-tight tracking-wider text-center md:text-left md:text-5xl">Croquis</h3>
      <img ref={el => croquisItem = el} className=" w-4/5 border rounded-xl shadow-item md:h-[80vh]" src={croquis} alt="Croquis" />
    </div>
  );
}

export default Croquis;
