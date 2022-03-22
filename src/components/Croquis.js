import React from "react";
import croquis from "../assets/Croquis1.png";

function Croquis() {
  return (
    <div className=" flex flex-col pb-10 items-center md:h-[90vh]">
      <h3 className="p-4 text-3xl font-extrabold leading-tight tracking-wider text-center md:text-left md:text-5xl">Croquis</h3>
      <img className=" w-4/5 border rounded-xl shadow-item" src={croquis} alt="Croquis" />
    </div>
  );
}

export default Croquis;
