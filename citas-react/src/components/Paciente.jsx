import React from 'react'

const Paciente = ({ paciente }) => {
  const {
    nombre,
    propietario,
    contactoPropietario,
    fechaAlta,
    observaciones
  } = paciente;

  return (
    <div className='mx-5 my-4 bg-white rounded-md shadow-md px-5 py-5'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nombre {' '}
        <span className='font-normal normal-case'>{nombre}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Propietario {' '}
        <span className='font-normal normal-case'>{propietario}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Telefono de contacto {' '}
        <span className='font-normal normal-case'>{contactoPropietario}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Fecha de alta {' '}
        <span className='font-normal normal-case'>{fechaAlta}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Observaciones {' '}
        <span className='font-normal normal-case'>{observaciones}</span>
      </p>
      <div className='flex justify-between'>
        <button type='button' className='py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold rounded-md uppercase'>Editar</button>
        <button type='button' className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md uppercase'>Eliminar</button>
      </div>
    </div>
  )
}

export default Paciente
