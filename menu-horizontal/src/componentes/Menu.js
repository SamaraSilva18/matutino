import React from "react"
import "./Menu.css"

export default function Menu() {
    return (
        <div>
            <div className="menu">
                <nav className="navMenu">
                    <ul>
                        <li> <a href = "inicio"> Nosso Canal </a> </li>
                        <li> <a href = "cursos"> Cursos </a> </li>
                        <li> <a href = "contatos"> Contatos </a> </li>
                        <li> <a href = "parceiro"> Parceiros </a> </li>
                        <li> <a href = "missao"> Missao </a> </li> 
                        <li> <a href = "sobre"> Sobre </a> </li>
                    </ul>
                </nav>

            </div>
        </div>
    )
}

