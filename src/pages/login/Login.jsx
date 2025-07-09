import "./Login.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login(props){
    const {handleLogin} = props;
    const userDefault = {
        user: "",
        password: ""
    }
    const navigate = useNavigate()
    const [login,setLogin] = useState(userDefault)

    const handleSubmit = (event) =>{
        event.preventDefault()
        if(login.user && login.password){
            if(handleLogin(login))
                navigate("/")
            else
                alert("usuario o contraseña incorrectos")
        }//if
    }//handleSubmit
    useEffect(()=>{console.log(login)},[login])

    return(<>
    <section className="login-container">
      <div className="login-box">
        <h2>Bienvenido a Twitter</h2>
        
        <form onSubmit={handleSubmit}>
            <label htmlFor="txtUser">Nombre de usuario</label>
            <input
                type="text"
                id="txtUser"
                placeholder="Nombre de usuario"
                value={login.user}
                onChange={(event) => setLogin((content)=>{
                return {
                    ...content,
                    user: event.target.value
                }
                })}
                required
            />

            <label htmlFor="txtPassword">Contraseña</label>
          <input 
            type="password" 
            name="txtPassword" 
            placeholder="Contraseña"
            value={login.password}
            onChange={(event) => setLogin((content)=>{
                return {
                    ...content,
                    password: event.target.value
                }
            })}
            id="txtPassword" 
            required/>

          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </section>
    
    </>)
}//Login()

export default Login