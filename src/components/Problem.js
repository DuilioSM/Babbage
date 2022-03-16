import React from "react";
import LogoBitacora from "../assets/Logo-bitacora.png";

function Problem() {
  return (
    <div className="flex pt-28 pb-28 px-20 items-center text-justify bg-blueGray">
      <div>
        <h3 className="mt-20 text-5xl font-extrabold leading-tight tracking-wider">Bitacora UTJ</h3>
        <p className="pt-1 text-l text-grayText leading-normal tracking-widest">
          La Universidad Tecnológica de Jalisco tiene varios laboratorios y
          talleres en los distintos edificios y carreras. En cada carrera hay un
          técnico laboratoristas encargado de los equipos, materiales y
          registrar cualquier actividad que en ellos se realizan como son las
          clases normales, practicas fuera de la clase, cursos, etc. Existe una
          bitácora de registro sin embargo no todos los usuarios (profesores,
          alumnos, externos, etc.) se registran en ella siempre, algunas veces
          el técnico laborista tiene que salir de su lugar a realizar algún
          mantenimiento y los profesores se les dificulta entrar a un
          laboratorio debido a que él tiene las llaves de los mismos en su
          resguardo. Por otro lado, no existen un buen control y planeación de
          los mantenimientos a los equipos de cómputo y algunas veces se
          interrumpen las clases que ya estaban programadas. Otro problema es
          que las pc’s de todos los laboratorios de computo tienen muchos
          programas instalados debido a que se instalan todo el software de la
          carrea en todas. Hay tiempos en los que no se utilizan los
          laboratorios pudiendo utilizarse por los alumnos para realizar
          prácticas de clase, practicar o realizar algún trabajo escolar. EL
          técnico laboratorista se le dificulta controlar el acceso a todos los
          laboratorios y localizar al responsable de un equipo dañado, una
          basura tirada o dejada en el laboratorio, etc. Se desea tener un
          sistema informático que permita el registro de usuarios y que pudiera
          controla de mejor forma las actividades que realiza el técnico
          laboratorista. Además, se requiere un software avise cuando es
          necesario realizar los mantenimientos preventivos, actualizar software
          o equipos, eliminación de material peligroso y retiro de equipos
          obsoletos.
        </p>
      </div>
      <img className="h-fit" alt="Logo bitácora" src={LogoBitacora}/>
    </div>
  );
}

export default Problem;
