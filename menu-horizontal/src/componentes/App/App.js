import React from 'react';
import './App.css';
import Inicio from '../Inicio/Inicio.jsx';
import Header from '../Header/Header.jsx';
import Cursos from '../Cursos/Cursos.jsx';
import Contatos from '../Contatos/Contatos.jsx';
import Parceiros from '../Parceiros/Parceiros.jsx';
import Missao from '../Missao/Missao.jsx';
import Sobre from '../Sobre/Sobre.jsx';
import Footer from '../Footer/Footer.jsx';
import { Route, Switch } from "react-router-dom";

function App(props) {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" render = {(props) => <Inicio />}> </Route>
          <Route exact path="/cursos" render = {(props) => <Cursos />}> </Route>
          <Route exact path="/contatos" render = {(props) => <Contatos />}> </Route>
          <Route exact path="/parceiros" render = {(props) => <Parceiros />}> </Route>
          <Route exact path="/missao" render = {(props) => <Missao />}> </Route>
          <Route exact path="/sobre" render = {(props) => <Sobre />}> </Route>
        </Switch>
      </main>
        <Footer />
    </div>
  );
}

export default App;
