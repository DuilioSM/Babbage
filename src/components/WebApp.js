import React from 'react'

function WebApp() {
  return (
    <div className='flex flex-col my-16 items-center'>
        <h3 className='text-4xl px-5 font-extrabold leading-tight tracking-[.14em] text-center'>Servicio mediante la web</h3>
        <p className='w-2/3 text-center text-l text-grayText leading-normal tracking-widest py-6 md:p-0 md:w-1/2'>Una solución para aquellos que no pueden acceder a las computadoras de UTJ, lo hagan mediante la web.</p>
        <a className='rounded-full mt-8 py-4 px-8 text-white bg-highRed border-2 border-highRed hover:bg-white hover:text-highRed active:bg-highRed' href='https://6239385564114e00085eafa6--gallant-wiles-2e012f.netlify.app/'><button>Ir la página</button></a>
    </div>
  )
}

export default WebApp