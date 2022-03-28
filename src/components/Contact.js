import React, { useRef, useEffect } from "react";
import Devepoler from "../assets/web-development.png";

import gsap, { Power2 } from "gsap";

function Contact() {
  //Logic of gsap
  let imageItem = useRef(null);
  let titleItem = useRef(null);
  let subtitleItem = useRef(null);
  let buttonItem = useRef(null);

  useEffect(() => {
    gsap.from(titleItem, {
      duration: 2.5,
      opacity: 0,
      y: 30,
      ease: Power2.easeOut,
    });
    gsap.from(subtitleItem, {
      duration: 2,
      opacity: 0,
      y: 30,
      ease: Power2.easeOut,
      delay: 0.5,
    });
    gsap.from(buttonItem, {
      duration: 1.5,
      opacity: 0,
      y: 30,
      ease: Power2.easeOut,
      delay: 1,
    });
    gsap.from(imageItem, {
      duration: 2.5,
      opacity: 0,
      ease: Power2.easeOut,
      delay: 1,
    });
  }, []);

  return (
    <div className="h-[90vh] inline-flex items-center justify-between  w-full  md:pt-0 md:px-20 bg-blueGray">
      <div className="flex flex-col p-5 w-full items-center justify-center md:w-7/12 md:p-0 md:items-start">
        <h2
          ref={(el) => {
            titleItem = el;
          }}
          className="text-5xl text-center font-extrabold pb-8 leading-tight tracking-wider md:text-left md:text-6xl"
        >
          Crea y transforma tu negocio digital
        </h2>
        <p
          ref={(el) => {
            subtitleItem = el;
          }}
          className=" w-2/3 text-lg text-grayText pb-6 leading-normal tracking-widest text-center md:text-left"
        >
          Somos una agencia de desarrollo y diseño digital al alcance de todas
          las empresas
        </p>
        <a
          ref={(el) => {
            buttonItem = el;
          }}
          href="https://api.whatsapp.com/send/?phone=5213325979382"
          rel="noopener noreferrer"
        >
          <button className="py-2 px-4 rounded-lg border-2 border-highRed bg-highRed text-white tracking-widest hover:bg-offWhite hover:text-highRed active:bg-highRed ">
            Contáctanos
          </button>
        </a>
      </div>
      <div className="hidden justify-center items-end w-5/12 md:flex-col md:flex">
        <img
          ref={(el) => {
            imageItem = el;
          }}
          className="  md:w-full"
          src={Devepoler}
          alt="Desarrollador animado"
        />
      </div>
    </div>
  );
}

export default Contact;
