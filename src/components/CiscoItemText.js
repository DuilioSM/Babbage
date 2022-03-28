import React, { useRef, useEffect } from "react";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function CiscoItemText({ title, text, link }) {
  let textItem = useRef(null);

  useEffect(() => {
    gsap.from(textItem, {
      scrollTrigger: {
        trigger: textItem,
        start: " 80%",
        toggleActions: "play none none reverse",
      },
      duration: 2,
      opacity: 0,
      x: title === "Topología lógica" ? -800 : 800,
      ease: Power2.easeInOut,
    });
  },[title]);
  return (
    <div
      ref={(el) => (textItem = el)}
      className="flex flex-col items-center justify-center text-center md:items-start md:text-left md:w-1/2"
    >
      <h3 className="text-2xl font-extrabold leading-tight tracking-wider">
        {title}
      </h3>
      <p className="pt-3 text-grayTex">{text}</p>
      <a
        className="rounded-full mt-8 py-4 px-8 text-white bg-highRed border-2 border-highRed hover:bg-white hover:text-highRed active:bg-highRed"
        href={link}
      >
        Descarga aquí
      </a>
    </div>
  );
}

export default CiscoItemText;
