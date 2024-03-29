import React, { useRef, useEffect } from "react";
import ValueItem from "./ValueItem";
import Honestidad from "../assets/honestidad.png";
import Respeto from "../assets/el-respeto.png";
import Responsabilidad from "../assets/responsabilidad.png";
import Pasion from "../assets/pasion.png";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Values() {
  let titleItem = useRef(null);
  let valuesItem = useRef(null);

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
    gsap.from(valuesItem, {
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
    <div className="px-10 py-12 flex flex-col items-center md:px-60 md:mx-2 md:py-16 ">
      <h3
        ref={(el) => (titleItem = el)}
        className=" text-5xl font-extrabold leading-tight tracking-wider"
      >
        Valores
      </h3>
      <div ref={(el) => (valuesItem = el)} className="pt-12 grid grid-cols-1 grid-rows-4 gap-y-14 md:gap-x-28 md:grid-cols-2 md:grid-rows-2">
        <ValueItem
          img={Honestidad}
          title="Honestidad"
          text="Somos una empresa dedicada a ser la mejor de nuestra área, es por eso que somos honestos en lo que hacemos sin mentir acerca de nuestros productos y servicios que ofrecemos."
        />
        <ValueItem
          img={Respeto}
          title="Respeto"
          text="Todos somos iguales y por eso nos comprometemos a respetar a todo aquel que trabaje con nosotros, al igual que respetaremos las ideas y pensamientos de las personas."
        />
        <ValueItem
          img={Responsabilidad}
          title="Responsabilidad"
          text="Nos comprometemos a cumplir los objetivos que nos prometemos a lograr los objetivos de los proyectos que realizamos."
        />
        <ValueItem
          img={Pasion}
          title="Pasión"
          text="Estamos dispuestos a adaptarnos a todo tipo de situaciones que se nos presenten a lo largo del desarrollo de nuestra empresa."
        />
      </div>
    </div>
  );
}

export default Values;
