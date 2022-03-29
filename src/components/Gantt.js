import React, { useRef, useEffect } from "react";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gantt from "../assets/gantt.png";

gsap.registerPlugin(ScrollTrigger);

function Gantt() {
  let titleItem = useRef(null);
  let imageItem = useRef(null);
  useEffect(() => {
    gsap.from(titleItem, {
      scrollTrigger: {
        trigger: titleItem,
        start: " 80%",
        toggleActions: "play none none reverse",
      },
      duration: 2,
      opacity: 0,
      y: 200,
      ease: Power2.easeInOut,
    });
    gsap.from(imageItem, {
      scrollTrigger: {
        trigger: imageItem,
        start: " 80%",
        toggleActions: "play none none reverse",
      },
      duration: 2,
      opacity: 0,
      y: 200,
      delay: 0.5,
      ease: Power2.easeInOut,
    });
  }, []);
  return (
    <div className=" flex flex-col p-10 items-center  ">
      <h3
        ref={(el) => (titleItem = el)}
        className="p-4 text-3xl font-extrabold leading-tight tracking-wider text-center md:text-left md:text-5xl"
      >
        Diagrama de Gantt
      </h3>
      <img
        ref={(el) => (imageItem = el)}
        className=" w-fit border rounded-xl shadow-item "
        src={gantt}
        alt="Croquis"
      />
    </div>
  );
}

export default Gantt;
