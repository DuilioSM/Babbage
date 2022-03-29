import React from "react";
import Linkedin from "../assets/linkedin.png";
import IconFacebook from "../assets/call.png";

function TeamItem({ name, position, img, link, num }) {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center pt-10 pb-10 px-4 shadow-item	rounded-xl md:w-56	">
      <img src={img} alt={name} className="h-40 rounded-full mb-5" />
      <h4 className="text-lg leading-normal	tracking-widest font-extrabold">
        {name}
      </h4>
      <p className="pt-1 text-xs text-grayText leading-normal tracking-widest">
        {position}
      </p>
      <div className="flex justify-center pt-4">
        <a href={link}>
          <img className="w-6 mx-2" src={Linkedin} alt={`Linkedin ${name}`} />
        </a>
        <a href={num}>
          <img
            className="w-6 mx-2"
            alt={`Facebook ${name}`}
            src={IconFacebook}
          />
        </a>
      </div>
    </div>
  );
}

export default TeamItem;
