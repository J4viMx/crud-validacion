import Formulario from "../components/Formulario"
import Tabla from "../components/Tabla"
import useCrud from "../hooks/useCrud"
import Modal from "../components/Modal"

const Principal = () => {

  const {datos, modal} = useCrud()

  return (
    <main className="flex items-center flex-col w-3/4 mx-auto">

        <div className="form w-2/4 mx-auto rounded-xl shadow-lg text-white mt-10">
          
          <h1 className="text-center mt-10 font-bold text-6xl block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-white">Formulario Crud</h1>
          {/* Hacer texto con gradient en tailwind */}
          
          <Formulario/>
        </div>
        {datos.length > 0 && (<Tabla/>)}

        {modal && <Modal/>}
        
    </main>
    
  )
}
export default Principal