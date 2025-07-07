import "./Footer.css"

function Footer(props){

    return(<>
    <footer className="footer">
      <ul className="footer-links">
        <li>Acerca de</li>
        <li>Centro de ayuda</li>
        <li>Condiciones</li>
        <li>Privacidad</li>
        <li>Política de cookies</li>
        <li>Accesibilidad</li>
      </ul>
      <p className="footer-copy">© {new Date().getFullYear()} Tuipter, Inc.</p>
    </footer>
    </>)
}

export default Footer