import React from "react";
import Devepoler from '../assets/web-development.png'

function Contact() {
  return (
    <div className="h-[90vh] inline-flex items-center justify-between  w-full  md:pt-0 md:px-20 bg-blueGray">
      <div className="flex flex-col p-5 w-full items-center justify-center md:w-7/12 md:p-0 md:items-start">
        <h2 className="text-5xl text-center font-extrabold pb-8 leading-tight tracking-wider md:text-left md:text-6xl">Crea y transforma tu negocio digital</h2>
        <p className=" w-2/3 text-lg text-grayText pb-6 leading-normal tracking-widest text-center md:text-left">Somos una agencia de desarrollo y diseño digital al alcance de todas las empresas</p>
        <a href="https://api.whatsapp.com/send/?phone=5213325979382" rel="noopener noreferrer"><button className="py-2 px-4 rounded-lg border-2 border-highRed bg-highRed text-white tracking-widest hover:bg-offWhite hover:text-highRed active:bg-highRed ">Contáctanos</button></a>
      </div>
      <div className="hidden justify-center items-end w-5/12 md:flex-col md:flex">
          <img className="  md:w-full" src={Devepoler} alt='Desarrollador animado'/>
      </div>
    </div>
  );
}

export default Contact;
