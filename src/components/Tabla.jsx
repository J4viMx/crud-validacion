import useCrud from "../hooks/useCrud"
import TablaDato from "./TablaDato"

const Tabla = () => {

  const {datos} = useCrud()

  return (
    <>
      <table className="mt-20 text-white">
        <thead>
          <tr className="bg-opacity-60 bg-slate-500">
            <th className="pr-10">Nombre</th>
            <th className="pr-10">Apellido</th>
            <th className="pr-10">RFC</th>
            <th className="pr-10">Correo Electronico</th>
            <th className="pr-10">Fecha de nacimiento</th>
          </tr>
        </thead>
        <tbody>
          {datos.map(dato => (
            <TablaDato
              key={dato.rfc}
              dato={dato}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}
export default Tabla