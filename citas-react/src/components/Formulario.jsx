import React from 'react'
import { useState } from 'react';

const Formulario = ({pacientes,setPacientes}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [contactoPropietario, setcontactoPropietario] = useState('');
  const [fechaAlta, setFechaAlta] = useState('');
  const [observaciones, setObservaciones] = useState('');
  const [errorFormulario, setErrorFormulario] = useState(false);
  
  // Validacion del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if([nombre,propietario,contactoPropietario,fechaAlta,observaciones].includes('')){
      setErrorFormulario(true);
      return;
    }
    setErrorFormulario(false);

    const objetoPaciente = {
      nombre,
      propietario,
      contactoPropietario,
      fechaAlta,
      observaciones
    }

    setPacientes([...pacientes,objetoPaciente]);
    limpiarForm();

  }
  
  const limpiarForm = () => {
    setNombre('');
    setPropietario('');
    setcontactoPropietario('');
    setFechaAlta('');
    setObservaciones('');
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      {/* HEADER FORMULARIO */}
      <h2 className='font-black text-3xl text-center'>Seguimiento Paciente</h2>
      <p className='text-xl mt-5 text-center mb-5'>
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>

      {/* FORMULARIO DE REGISTRO */}
      
      <form onSubmit={handleSubmit} className='bg-white shadow-md ml-5 rounded-lg py-4 px-10 mb-10'>
        {errorFormulario && (
        <div className='bg-red-800 text-white text-center uppercase mb-3 p-3 rounded-md'>Todos los campos son obligatorios</div>)
        }
        <div className='mb-5'>
          <label className='font-bold text-gray-700 uppercase' htmlFor="nombreMastoca">Mascota</label>
          <input
           className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
           id='nombreMastoca'
           type='text' 
           placeholder='Nombre de la mascota'
           value={nombre}
           onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label className='font-bold text-gray-700 uppercase' htmlFor="duenio">Nombre Propietario</label>
          <input
           className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
           id='duenio'
           type='text' 
           placeholder='Nombre del propietario'
           value={propietario}
           onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label className='font-bold text-gray-700 uppercase' htmlFor="telefono">Telefono contacto</label>
          <input
           className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
           id='telefono'
           placeholder='Telefono contacto del propietario'
           value={contactoPropietario}
           onChange={(e) => setcontactoPropietario(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label className='font-bold text-gray-700 uppercase' htmlFor="fechaAlta">Fecha de Alta</label>
          <input
           className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
           id='fechaAlta'
           type='date'
           value={fechaAlta}
           onChange={(e) => setFechaAlta(e.target.value)} 
          />
        </div>

        <div className='mb-5'>
          <label className='font-bold text-gray-700 uppercase' htmlFor="fechaAlta">Observaciones</label>
          <textarea 
           className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
           id="observaciones"
           placeholder='Observaciones del caso'
           value={observaciones}
           onChange={(e) => setObservaciones(e.target.value)}
          />
        </div>

        {/* BOTON SUBMIT */}
        <input 
         type="submit"
         className='bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-all'
         value="Cargar mascota"
        />
        
      </form>
    </div>
  )
}

export default Formulario;
