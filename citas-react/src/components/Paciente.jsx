import React from 'react'

const Paciente = () => {
  return (
    <div className='mx-5 my-4 bg-white rounded-md shadow-md px-5 py-5'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Nombre {' '}
          <span className='font-normal normal-case'>Hook</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Propietario {' '}
          <span className='font-normal normal-case'>Tom</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Telefono de contacto {' '}
          <span className='font-normal normal-case'>2227-560336</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Fecha de alta {' '}
          <span className='font-normal normal-case'>1 de diciembre de 2051</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Observaciones {' '}
          <span className='font-normal normal-case'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus eaque pariatur id qui dolore beatae quis atque similique eveniet reiciendis. Ab incidunt voluptatum in consectetur voluptates ad itaque, alias tenetur?</span>
        </p>
    </div>
  )
}

export default Paciente
