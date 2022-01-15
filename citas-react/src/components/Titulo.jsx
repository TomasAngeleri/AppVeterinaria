import React from 'react'

const Titulo = ({ titulo, subtitulo, textoColor }) => {
  return (
    <div>
      <h2 className='font-black text-3xl text-center'>{titulo}</h2>
      <p className='text-xl mt-5 mb-5 text-center '>
        {subtitulo} {''}
        <span className='text-indigo-600 font-bold'>{textoColor}</span>
      </p>
    </div>
  )
}

export default Titulo
