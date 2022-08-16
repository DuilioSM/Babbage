import React, { useRef, useEffect } from "react";
import TeamItem from "./TeamItem";
// import TeamIcon from "../assets/TeamIcon.png";
import andres from "../assets/andres.JPG";
import carlos from "../assets/carlos.JPG";
import victor from "../assets/victor.JPG";
import duilio from "../assets/duilio.JPG";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Team() {
  let titleItem = useRef(null);
  let subtitleItem = useRef(null);
  let teamItems = useRef(null);

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
      y: titleItem,
      delay: 0.5,
      ease: Power2.easeInOut,
    });
    gsap.from(teamItems, {
      scrollTrigger: {
        trigger: titleItem,
        start: " 80%",
        toggleActions: "play none none reverse",
      },
      duration: 3,
      opacity: 0,
      y: 300,
      ease: Power2.easeInOut,
    });
  }, []);

  return (
    <div className="flex flex-col items-center h-fit px-5">
      <h3
        ref={(el) => (titleItem = el)}
        className="mt-16 text-3xl font-extrabold leading-tight tracking-wider text-center md:text-5xl"
      >
        Nuestro{" "}
        <span className="text-3xl font-extrabold leading-tight tracking-wider text-highRed md:text-5xl">
          equipo
        </span>{" "}
        para tu empresa
      </h3>
      <p
        ref={(el) => {
          subtitleItem = el;
        }}
        className="text-center  text-sm text-grayText p-6 leading-normal	tracking-widest md:w-6/12"
      >
        Sabemos la importancia que tiene el software para las pymes, por ello
        buscamos la mejor experiencia para nuestros clientes
      </p>
      <div
        ref={(el) => {
          teamItems = el;
        }}
        className="pt-6 pb-20  grid gap-12 grid-cols-1 md:grid-cols-4 "
      >
        <TeamItem
          key="Carlos"
          name="Carlos Alvarado"
          num="tel:3312259518"
          link="https://www.linkedin.com/in/alejandro-garc%C3%ADa-47554a234/"
          position="Administrador de software"
          img={carlos}
        />
        <TeamItem
          key="Victor"
          name="Víctor Gonzalez"
          num="tel:3315570447"
          link="https://www.linkedin.com/in/victor-emilio-gonzalez-guzman-23b720234/"
          position="Diseñador"
          img={victor}
        />
        <TeamItem
          key="Andres"
          name="Andrés Martinez"
          num="tel:3324809257"
          link="https://www.linkedin.com/in/andr%C3%A9s-francisco-mart%C3%ADnez-rinc%C3%B3n-242720234/"
          position="Desarrollador Java"
          img={andres}
        />
        <TeamItem
          key="Duilio"
          name="Duilio Sotelo"
          num="tel:3325979382"
          link="https://www.linkedin.com/in/duilio-sotelo-a8244a1b0/"
          position="Desarrollador web"
          img={duilio}
        />
      </div>
    </div>
  );
}

export default Team;
