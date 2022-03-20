import React from "react";

const CiscoItemText = ({ title, text, link }) => (
  <div className="flex flex-col items-start justify-center w-1/2">
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

export default CiscoItemText;
