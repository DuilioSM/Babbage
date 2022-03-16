import React from "react";
import Devepoler from '../assets/web-development.png'

function Contact() {
  return (
    <div className="h-screen inline-flex justify-between w-full pt-28 px-20 bg-blueGray">
      <div className="flex flex-col w-7/12 items-start justify-center">
        <h2 className="text-6xl font-extrabold pb-8 leading-tight tracking-wider">Crea y transforma tu negocio digital</h2>
        <p className=" w-2/3 text-lg text-grayText pb-6 leading-normal	 tracking-widest">Somos una agencia de desarrollo y diseño digital al alcance de todas las empresas</p>
        <a href="https://api.whatsapp.com/send/?phone=5213325979382" rel="noopener noreferrer"><button className="py-2 px-4 rounded-lg border-2 border-highRed bg-highRed text-white tracking-widest hover:bg-offWhite hover:text-highRed active:bg-highRed ">Contáctanos</button></a>
      </div>
      <div className="flex flex-col justify-center items-end w-5/12">
          <img className="w-full" src={Devepoler} alt='Desarrollador animado'/>
      </div>
    </div>
  );
}

export default Contact;
