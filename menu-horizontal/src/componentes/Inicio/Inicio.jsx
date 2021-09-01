import React from "react"
import Titulo from "../Titulo/Titulo"
import Logo from '../../imagens/LogoFatec.jpeg';

export default function Inicio() {
    return (
            <div className="inicio">
                
                <Titulo texto = "Formulario inicial do projeto React" />
            
                <div className="inicio">
                    <button id="confirmar">Confirmar</button>
                    <button id="salvar" onClick={() => {alert('Botao Clicado!')}}> Salvar </button>
                
                    <figure>
                        <img id="logo" src={Logo} align='center'/>
                    </figure>
                
                </div>

            </div>
    )
}