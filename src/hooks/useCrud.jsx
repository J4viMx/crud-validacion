import { useContext } from "react";
import CrudContext from "../context/CrudProvider";

const useCrud = () => {
    return useContext(CrudContext)
}


export default useCrud