import { Formik , Form, Field, ErrorMessage} from "formik"
import Alerta from "./Alerta";
import {calcularEdad} from "../helpers/fecha";
import useCrud from '../hooks/useCrud'
import { useState, useEffect } from "react";

const Formulario = () => {

  const {datos, setDatos, datoEditar, editarDato, setModal} = useCrud()

  const [editar, setEditar] = useState(false)

  useEffect(() => {
    console.log(datoEditar.nombre)
    if(datoEditar.nombre.length > 0){
      setEditar(true)
    }else{
      setEditar(false)
    }
  }, [datoEditar])
  
  

  return (
    <>
    
      <Formik
        initialValues={
        {
          nombre: datoEditar.nombre,
          apellido: datoEditar.apellido,
          rfc: datoEditar.rfc,
          email: datoEditar.email,
          fechaNacimiento: datoEditar.fechaNacimiento
        }}

        validate={ (values) =>{
          let errors = {};
          let edad;

          if(values.fechaNacimiento.length > 0){
            edad = calcularEdad(values.fechaNacimiento)
          } else{
            errors.fechaNacimiento = "Por favor introduce una fecha de nacimiento"
          }


          //Validacion nombre
          if(!values.nombre){ 
            errors.nombre = 'Por favor ingresa un nombre'
          }else if(!/^[a-zA-ZÀ-ÿ]{1,40}$/.test(values.nombre)){
            errors.nombre = "El nombre solo puede contener letras"
          }

          //Validacion apellido
          if(!values.apellido){
            errors.apellido = 'Por favor ingresa un apellido'
          }else if(!/^[a-zA-ZÀ-ÿ]{1,40}$/.test(values.apellido)){
            errors.apellido = "El apellido solo puede contener letras"
          }

          //Validacion RFC
          if(!values.rfc){
            errors.rfc = 'Por favor ingresa un RFC'
          }
          else if(!/^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/.test(values.rfc)){
            errors.rfc = "No es un RFC Valido"
          }

          //Validacion correo
          
          if(!values.email){
            errors.email = 'Por favor ingresa un Correo Electronico'
          }
          else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
            errors.email = "El correo no es valido"
          }


          //Validar fecha de nacimiento

          if(edad <= 18){
            errors.fechaNacimiento = "Debes ser mayor de edad para relizar el registro"
          }
          

          return errors;
        }}

        onSubmit={(values, {resetForm}) =>{
          resetForm()
          console.log(editar)
          if(editar){
            editarDato(values)
            setModal(false)
            setEditar(false)
          }else{
            setDatos([...datos, values])
          }
        }}

      >

        {({errors}) => (
          <Form className="flex-col items-center">
            
            <div className="md:w-full md:flex justify-around mt-5">
              <div>
                {/* <label className="font-bold text-white" htmlFor="nombre">Nombre</label> */}
                <Field
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Nombre"
                  className="border-white-500  border-b border-cyan-600 px-2 placeholder:text-white"
                />
                <ErrorMessage name="nombre" component={() => (
                  <Alerta
                    errors={errors.nombre} 
                  />
                )} />
                
              </div>
              <div>
                {/* <label className="font-bold text-white" htmlFor="apellido">Apellido</label> */}
                <Field
                  type="text"
                  id="apellido"
                  name="apellido"
                  placeholder="Apellido"
                  className="border-white-500  border-b border-cyan-600 px-2 placeholder:text-white"
                />

                <ErrorMessage name="apellido" component={() => (
                  <Alerta
                    errors={errors.apellido} 
                  />
                )} />
              </div>
            </div>

            <div className="md:w-full md:flex justify-around mt-5">
              <div>
                {/* <label className="font-bold text-white" htmlFor="rfc">RFC</label> */}
                <Field
                  type="text"
                  id="rfc"
                  name="rfc"
                  placeholder="RFC"
                  className="border-white-500  border-b border-cyan-600 px-2 placeholder:text-white mt-10"
                />
                <ErrorMessage name="rfc" component={() => (
                  <Alerta
                    errors={errors.rfc} 
                  />
                )} />
              </div>


              <div>
                {/* <label className="font-bold text-white" htmlFor="email">Correo Electronico</label> */}
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="border-white-500  border-b border-cyan-600 px-2 placeholder:text-white mt-10"
                />
                <ErrorMessage name="email" component={() => (
                  <Alerta
                    errors={errors.email} 
                  />
                )} />
              </div>
            </div>


            <div className=" mb-8 mt-20">
              <label className="font-bold text-white " htmlFor="fechaNacimiento">Fecha de nacimiento</label>
              <Field
                type="date"
                id="fechaNacimiento"
                name="fechaNacimiento"
                placeholder="Tú Fecha de Nacimiento"
                className="border-white-500  border-b border-cyan-600 px-2 placeholder:text-white "
              />
              <ErrorMessage name="fechaNacimiento" component={() => (
                <Alerta
                  errors={errors.fechaNacimiento} 
                />
              )} />
            </div>

            <button 
              type="submit"
              className="my-7 p-3 w-1/3  bg-gradient-to-r from-cyan-600 to-blue-500  text-white text-center block rounded-xl font-bold hover:bg-gradient-to-r hover:from-cyan-700 hover:to-blue-700"
            > Enviar </button>
          </Form>
        )}


        
      </Formik>
    </>
  )
}
export default Formulario