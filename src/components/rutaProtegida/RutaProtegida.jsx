import { Navigate } from "react-router-dom";

function RutaProtegida(props){
    const {auth,children} = props

    return(<>
    {auth?children:<Navigate to="/login"/>}
    </>)
}

export default RutaProtegida