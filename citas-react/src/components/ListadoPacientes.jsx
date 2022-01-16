import Paciente from './Paciente';
import Titulo from './Titulo';

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll '>
      {/* HEADER LISTADO */}
      {pacientes && pacientes.length ?
        <>
          <Titulo
            titulo={"Listado Pacientes"}
            subtitulo={"Administra tus"}
            textoColor={"Pacientes y Citas"}
          />
          {
            pacientes.map((data) => (
              <Paciente
                setPaciente={setPaciente}
                key={data.id}
                paciente={data}
                eliminarPaciente={eliminarPaciente}
              />
            ))
          }
        </>
        :
        <Titulo
          titulo={"No hay pacientes"}
          subtitulo={"Cargue los pacientes"}
          textoColor={"y se verán aqui"}
        />
      }


    </div>
  )
}

export default ListadoPacientes; 