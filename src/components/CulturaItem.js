import React from 'react'

function CulturaItem({title,text}) {
  return (
    <div className='mx-6 w-1/4 flex flex-col items-center mt-16 object-contain	'>
        <h5 className='text-4xl font-extrabold leading-tight tracking-wider'>{title}</h5>
        <p className=' text-sm text-grayText leading-normal	tracking-wide text-center'>{text}</p>
    </div>
  )
}

export default CulturaItem