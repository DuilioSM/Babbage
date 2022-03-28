import React, { useRef, useEffect } from 'react'
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function WebApp() {
  let titleItem = useRef(null);
  let textItem = useRef(null);
  let buttonItem = useRef(null);

  useEffect(() => {
    gsap.from(titleItem, {
      scrollTrigger: {
        trigger: titleItem,
        start: " 80%",
        toggleActions: "play none none reverse",
      },
      duration: 2,
      opacity: 0,
      ease: Power2.easeInOut,
    });
    gsap.from(textItem, {
      scrollTrigger: {
        trigger: titleItem,
        start: " 80%",
        toggleActions: "play none none reverse",
      },
      duration: 2,
      opacity: 0,
      y:200,
      delay: 0.3,
      ease: Power2.easeInOut,
    });
    gsap.from(buttonItem, {
      scrollTrigger: {
        trigger: titleItem,
        start: " 80%",
        toggleActions: "play none none reverse",
      },
      duration: 2,
      opacity: 0,
      y:200,
      delay: .6,
      ease: Power2.easeInOut,
    });
  }, []);

  return (
    <div className='flex flex-col my-16 items-center'>
        <h3 ref={el => {titleItem = el}} className='text-4xl px-5 font-extrabold leading-tight tracking-[.14em] text-center'>Servicio mediante la web</h3>
        <p ref={el => {textItem = el}}  className='w-2/3 text-center text-l text-grayText leading-normal tracking-widest py-6 md:p-0 md:w-1/2'>Una solución para aquellos que no pueden acceder a las computadoras de UTJ, lo hagan mediante la web.</p>
        <a ref={el => {buttonItem = el}}  className='rounded-full mt-8 py-4 px-8 text-white bg-highRed border-2 border-highRed hover:bg-white hover:text-highRed active:bg-highRed' href='https://6239385564114e00085eafa6--gallant-wiles-2e012f.netlify.app/'><button>Ir la página</button></a>
    </div>
  )
}

export default WebApp