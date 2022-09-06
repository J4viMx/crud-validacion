import { useState, useEffect, createContext} from 'react'

const CrudContext = createContext()

const CrudProvider = ({children}) => {

    const [modal, setModal] = useState(false)
    const [datos, setDatos] = useState([])
    const [datoEditar, setDatoEditar] = useState({
        nombre: '',
        apellido: '',
        rfc: '',
        email: '',
        fechaNacimiento: ''
    })

    const eliminarDato = (rfc) => {
        const datosEditado = datos.filter( dato => dato.rfc !== rfc)
        setDatos(datosEditado) 
    }

    const editarDato = (editar) => {

        console.log(editar);
        const datosEditado = datos.map(dato => dato.rfc === editar.rfc ? editar : dato)
        setDatos(datosEditado)
        setDatoEditar({
            nombre: '',
            apellido: '',
            rfc: '',
            email: '',
            fechaNacimiento: ''
        })
    }

    return(

        <CrudContext.Provider value={{
            datos, 
            setDatos,
            eliminarDato,
            setDatoEditar,
            datoEditar,
            modal,
            setModal,
            editarDato
        }}>

            {children}

        </CrudContext.Provider>

    )
}

export{
    CrudProvider
}


export default CrudContext