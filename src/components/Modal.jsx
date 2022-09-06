import Formulario from "./Formulario"
import useCrud from "../hooks/useCrud"

const Modal = () => {

    const {setModal} = useCrud()

  return (
    <div className="top-0 left-0 w-full h-screen bg-slate-900 bg-opacity-80 fixed flex justify-center items-center">
        <div className="container bg-slate-900 flex flex-col justify-center items-center text-white">
            <h2 className="font-bold text-5xl mt-4 text-white">Editar Dato</h2>
            <Formulario/>
        </div>
    </div>
  )
}
export default Modal