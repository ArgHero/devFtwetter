import "./NavBar.css"

function NavBar(props){


    const menuItems = [
        { label: 'Inicio', icon: '🏠' },
        { label: 'Explorar', icon: '🔍' },
        { label: 'Notificaciones', icon: '🔔' },
        { label: 'Mensajes', icon: '✉️' }
    ]

    return(<>
        <nav className="navbar">
            <div className="logo"><img src="src\assets\twetter.svg" alt="logo"  /></div>
            <ul className="nav-menu">
                {menuItems.map((item, index) => (
                <li key={index} className="nav-item">
                    <span className="icon">{item.icon}</span>
                    <span className="label">{item.label}</span>
                </li>
                ))}
            </ul>
            <button className="tweet-button">Iniciar Sesión</button>
        </nav>
    </>)
}

export default NavBar;