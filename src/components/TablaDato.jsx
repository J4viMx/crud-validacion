import useCrud from "../hooks/useCrud"

const TablaDato = ({dato}) => {

    const {eliminarDato, setDatoEditar, setModal} = useCrud()    

    return (
        <tr className="odd:bg-opacity-80 odd:bg-slate-700">
            <td className="pr-10">{dato.nombre}</td> 
            <td className="pr-10">{dato.apellido}</td> 
            <td className="pr-10">{dato.rfc}</td> 
            <td className="pr-10">{dato.email}</td> 
            <td className="pr-10">{dato.fechaNacimiento}</td> 
            <td>
                <button 
                    className="p-3 mr-10 px-7 rounded-xl text-lg bg-yellow-600 text-white hover:bg-yellow-700"
                    onClick={() => { setDatoEditar(dato),
                                    setModal(true)
                    }}
                >Editar</button>
            </td> 
            <td>
                <button 
                    className="p-3 px-7 rounded-xl text-lg bg-red-600 text-white hover:bg-red-700"
                    onClick={() => {eliminarDato(dato.rfc)}}
                >Borrar</button>
            </td> 
        </tr>
    )
}
export default TablaDato