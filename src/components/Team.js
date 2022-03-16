import React from 'react'
import TeamItem from './TeamItem'
import TeamIcon from '../assets/TeamIcon.png'

function Team() {
  return (
    <div className='flex flex-col items-center h-fit'>
        <h3 className='mt-16 text-5xl font-extrabold leading-tight tracking-wider'>Nuestro <span className='text-5xl font-extrabold leading-tight tracking-wider text-highRed'>equipo</span> para tu empresa</h3>
        <p className='text-center w-6/12 text-sm text-grayText p-6 leading-normal	tracking-widest'>Sabemos la importancia que tiene el software para las pymes, por ello buscamos la mejor experiencia para nuestros clientes</p>
        <div className='pt-6 pb-20 grid gap-8 grid-cols-2 grid-rows-2'>
            <TeamItem key='Carlos' name='Carlos Alvarado' num='tel:3312259518' link='https://www.linkedin.com/in/alejandro-garc%C3%ADa-47554a234/' position='Administrador de software' img={TeamIcon}/>
            <TeamItem key='Victor' name='Víctor Gonzalez' num='tel:3315570447' link='https://www.linkedin.com/in/victor-emilio-gonzalez-guzman-23b720234/' position='Diseñador' img={TeamIcon}/>
            <TeamItem key='Andres' name='Andrés Martinez' num='tel:3324809257' link='https://www.linkedin.com/in/andr%C3%A9s-francisco-mart%C3%ADnez-rinc%C3%B3n-242720234/' position='Desarrollador Java' img={TeamIcon}/>
            <TeamItem key='Duilio' name='Duilio Sotelo' num='tel:3325979382' link='https://www.linkedin.com/in/duilio-sotelo-a8244a1b0/' position='Desarrollador web' img={TeamIcon}/>
        </div>
    </div>
  )
}

export default Team