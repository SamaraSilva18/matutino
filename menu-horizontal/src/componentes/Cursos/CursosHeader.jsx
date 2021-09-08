import React from "react"
import { Link } from "react-router-dom"

import '../Header/Header.css'

export default function CursosHeader() {
    return (
            <header className="menu">
                <nav className="navMenu">
                    <ul>
                        <li> <Link to = "/"> Voltar </Link> </li>
                        <li> <Link to = "/cursos"> Informatica </Link> </li>
                        <li> <Link to = "/cursos"> Engenharia </Link> </li>
                        <li> <Link to = "/cursos"> Quimica </Link> </li>
                        <li> <Link to = "/cursos"> Administraçao </Link> </li>
                        <li> <Link to = "/cursos"> Direito </Link> </li>
                        <li> <Link to = "/cursos"> Psicologia </Link> </li>
                        <li> <Link to = "/cursos"> Arquitetura </Link> </li>
                    </ul>
                </nav>
            </header>
    )
}