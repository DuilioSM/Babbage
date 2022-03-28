import React, { useRef, useEffect } from "react";
import CulturaItem from "./CulturaItem";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Cultura() {
  let titleItem = useRef(null);
  let subtitleItem = useRef(null);
  useEffect(() => {
    gsap.from(titleItem, {
      scrollTrigger: {
        trigger: titleItem,
        start: " 80%",
        toggleActions: "play none none reverse",
      },
      duration: 2.5,
      opacity: 0,
      y: titleItem,
      ease: Power2.easeInOut,
    });
    gsap.from(subtitleItem, {
      scrollTrigger: {
        trigger: titleItem,
        start: " 80%",
        toggleActions: "play none none reverse",
      },
      duration: 2.5,
      opacity: 0,
      y: 200,
      delay: 0.5,
      ease: Power2.easeInOut,
    });
  }, []);
  return (
    <div className="flex flex-col items-center  py-20 bg-blueGray h-4/5	md:px-20">
      <h3
        ref={(el) => (titleItem = el)}
        className="py-8 mx-8 text-center rounded-2xl bg-white text-4xl font-extrabold leading-tight tracking-[.14em] text-highRed shadow-item md:px-20 md:mx-0"
      >
        Cultura empresarial
      </h3>
      <div
        ref={(el) => (subtitleItem = el)}
        className="flex flex-col justify-center items-center md:flex-row md:items-start"
      >
        <CulturaItem
          title="Misión"
          text="Ser la empresa preferida de los clientes que buscan software de administración, buscando que nuestros desarrollos sean accesibles para nuestros clientes"
        />
        <CulturaItem
          title="Visión"
          text="Innovar constantemente en nuestro servicio para que sean de utilidad seguros y funcionales de manera global y así mantener la satisfacción de los clientes. Nuestros desarrollos garantizan la efectividad del software"
        />
      </div>
    </div>
  );
}

export default Cultura;
