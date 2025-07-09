import "./NavBar.css"
import { useNavigate } from "react-router-dom";

function NavBar(props){
    const {session,setSession} = props;
    const navigate = useNavigate();
    const menuItems = [
        { label: 'Inicio', icon: '🏠',route:"/" },
        { label: 'Perfil', icon: '🗿',route:"/usuario"  },
        { label: 'Notificaciones', icon: '🔔',route:"/"  },
        { label: 'Mensajes', icon: '✉️' ,route:"/" }
    ]

    return(<>
        <nav className="navbar">
            <div className="logo"><img src="src/assets/twetter.svg" alt="logo"  /></div>
            <ul className="nav-menu">
                {menuItems.map((item, index) => (
                <li key={index} className="nav-item" onClick={()=>{navigate(item.route)}}>
                    <span className="icon">{item.icon}</span>
                    <span className="label">{item.label}</span>
                </li>
                ))}
            </ul>
            {
                session?
                <button className="tweet-button" onClick={()=>{setSession(null)}}>Cerrar Sesión</button>
                :
                <button className="tweet-button" onClick={()=>{navigate("/login")}}>Iniciar Sesión</button>
            }
        
            
        </nav>
    </>)
}

export default NavBar;