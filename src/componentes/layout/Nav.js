import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><Link to="/">Institucional</Link></li>
                    <li><Link to="/Departamentos">Departamentos</Link></li>
                    <li><Link to="/Galeria">Galeria</Link></li>
                    <li><Link to="/Practicasprofesionalizantes">Practicasprofesionalizantes</Link></li>
                    <li><Link to="/Aic">Aic</Link></li>
                    <li><Link to="/Pei">Pei</Link></li>
                    <li><Link to="/Contacto">Contacto</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;