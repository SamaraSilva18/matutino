import React from "react"
import Titulo from "../Titulo/Titulo"
import { Route, Switch } from "react-router-dom";

import Inicio from '../Inicio/Inicio'
import './Cursos.css';
import CursosHeader from './CursosHeader.jsx';

export default function Cursos() {
    return (
        <div>

            <CursosHeader />

            <Titulo texto="Seçao de Cursos da Empresa" />

            <div className="cursos">
                <mainCursos>
                    <Switch>
                        <Route exact path="/" render={(props) => <Inicio />}> </Route>
                    </Switch>
                </mainCursos>
            </div>

        </div>
    )
}