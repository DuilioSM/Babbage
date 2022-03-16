import React from "react";
import ValueItem from "./ValueItem";
import Honestidad from '../assets/honestidad.png'
import Respeto from '../assets/el-respeto.png'
import Responsabilidad from '../assets/responsabilidad.png'
import Pasion from '../assets/pasion.png'

function Values() {
  return (
    <div className="flex flex-col items-center px-72 mx-2 py-16">
      <h3 className="  text-5xl font-extrabold leading-tight tracking-wider">
        Valores
      </h3>
      <div className="pt-12 grid grid-cols-2 gap-y-14 gap-x-28">
          <ValueItem img={Honestidad} title='Honestidad' text='Somos una empresa dedicada a ser la mejor de nuestra área, es por eso que somos honestos en lo que hacemos sin mentir acerca de nuestros productos y servicios que ofrecemos.'/>
          <ValueItem img={Respeto} title='Respeto' text='Todos somos iguales y por eso nos comprometemos a respetar a todo aquel que trabaje con nosotros, al igual que respetaremos las ideas y pensamientos de las personas.'/>
          <ValueItem img={Responsabilidad} title='Responsabilidad' text='Nos comprometemos a cumplir los objetivos que nos prometemos a lograr los objetivos de los proyectos que realizamos.'/>
          <ValueItem img={Pasion} title='Pasión' text='Estamos dispuestos a adaptarnos a todo tipo de situaciones que se nos presenten a lo largo del desarrollo de nuestra empresa.'/>
      </div>
    </div>
  );
}

export default Values;
