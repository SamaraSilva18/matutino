import React from "react"
import "./Secoes.css"

export default function Secoes() {
    return (
        <div>
            <div className="menu">
                <nav className="navMenu">
                    <ul>
                        <li> <a href = "#inicio" > Nosso Canal </a> </li>
                        <li> <a href = "#cursos" > Cursos </a> </li>
                        <li> <a href = "#contatos" > Contatos </a> </li>
                        <li> <a href = "#parceiro" > Parceiros </a> </li>
                        <li> <a href = "#missao" > Missao </a> </li> 
                        <li> <a href = "#sobre" > Sobre </a> </li>
                    </ul>
                </nav>
            </div>

            <section id="inicio">
                <h2> Nosso Canal </h2>
                <aside className="aside">
                    <a href = "#inicio" id = "inicio2">O Canal</a>
                    <a href = "#cursos" id = "cursos2">Cursos</a>
                    <a href = "#contatos" id = "contatos2">Contatos</a>
                    <a href = "#parceiros" id = "parceiros2">Parceiros</a>
                    <a href = "#missao" id = "missao2">Missao</a>
                    <a href = "#sobre" id = "sobre2">Sobre</a>
                </aside>
            </section>
            
            <section id="inicio">
                <h2> Nosso Canal </h2> 
            </section>
            
            <section id="cursos">
                <h2> Cursos </h2> 
            </section>

            <section id="contatos">
                <h2> Contatos </h2> 
            </section>

            <section id="parceiros">
                <h2> Parceiros </h2> 
            </section>

            <section id="missao">
                <h2> Missao </h2> 
            </section>

            <section id="sobre">
                <h2> Sobre </h2> 
            </section>

            <a class = "voltarTopo" href = ".menu"> Topo </a>
            <a class = "irInicio" href = "#inicio"> Inicio </a>
            <a class = "irCursos" href = "#cursos"> Cursos </a>
            <a class = "irContatos" href = "#contatos"> Contatos </a>
            <a class = "irParceiros" href = "#parceiros"> Parceiros </a>
            <a class = "irMissao" href = "#missao"> Missao </a>
            <a class = "irSobre" href = "#sobre"> Sobre </a>

            <footer>
               <h3> Rodape </h3>
            </footer>
    </div>
    )
}

