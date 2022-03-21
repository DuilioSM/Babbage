import React from "react";
import CulturaItem from "./CulturaItem";

function Cultura() {
  return (
    <div className="flex flex-col items-center  py-20 bg-blueGray h-4/5	md:px-20">
      <h3 className="py-8 mx-8 text-center rounded-2xl bg-white text-4xl font-extrabold leading-tight tracking-[.14em] text-highRed shadow-item md:px-20 md:mx-0">Cultura empresarial</h3>
      <div className="flex flex-col justify-center items-center md:flex-row md:items-start">
        <CulturaItem
          title="Misión"
          text="Ser la empresa preferida de los clientes que buscan software de administración, buscando que nuestros desarrollos sean accesibles para nuestros clientes"
        />
        <CulturaItem
          title="Visión"
          text="Innovar constantemente en nuestro servicio para que sean de utilidad seguros y funcionales de manera global y así mantener la satisfacción de los clientes. Nuestros desarrollos garantizan la efectividad del software"
        />
      </div>
    </div>
  );
}

export default Cultura;
