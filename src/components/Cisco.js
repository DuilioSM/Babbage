import React from "react";
import CiscoItem from "./CiscoItem";
import topologia from "../assets/topologia_logica.pkt";
import topologiaLogica from "../assets/topologiaLogica.png";
import topologiaFisica from "../assets/topologiaFisica.png";

function Cisco() {

  return (
    <div  className="">
      <CiscoItem
        title="Topología lógica"
        text="En esta red conectamos el cloud directamente a nuestro router, el cual se conecta con nuestro switch y este manda la señal a cuatro PCs y a un servidor local de datos"
        link={topologia}
        img={topologiaLogica}
        id={1}
      />
      <CiscoItem
        title="Topología física"
        text="Mediante el uso del croquis brindado por el area encargada de la bitácora de UTJ realizamos una todo el cálculo del materia que vamos a requerir para generar le solución de TI"
        link={topologia}
        img={topologiaFisica}
        id={2}
      />
    </div>
  );
}

export default Cisco;
