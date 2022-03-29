import React, { useRef, useEffect } from "react";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import budget from "../assets/budget.png";

gsap.registerPlugin(ScrollTrigger);

function Budget() {
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
    <div className=" flex flex-col p-10 bg-blueGray items-center  ">
      <h3
        ref={(el) => (titleItem = el)}
        className="p-4 text-3xl font-extrabold leading-tight tracking-wider text-center md:text-left md:text-5xl"
      >
        Presupuesto
      </h3>
      <img
        ref={(el) => (imageItem = el)}
        className=" w-fit border rounded-xl shadow-item md:h-[80vh]"
        src={budget}
        alt="Croquis"
      />
    </div>
  );
}

export default Budget;
