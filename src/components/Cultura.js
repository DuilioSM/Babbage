import React from "react";
import CulturaItem from "./CulturaItem";

function Cultura() {
  return (
    <div className="flex flex-col items-center px-20 py-20 bg-blueGray h-4/5	">
      <h3 className=" py-8 px-20 rounded-2xl bg-white text-4xl font-extrabold leading-tight tracking-[.14em] text-highRed shadow-item">Cultura empresarial</h3>
      <div className="flex justify-center">
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
