import './App.css';
import React from 'react';

import Inicio from '../Inicio/Inicio.jsx';
import Header from '../Header/Header.jsx';
import Titulo from '../Titulo/Titulo.jsx';
import Footer from '../Footer/Footer.jsx';

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>

        <Header />

      <div className="titulo">
        <Titulo />

      </div>

      <main>
        <Switch>
          <Route exact path="/" render = {(props) => <Inicio/>}> </Route>
        </Switch>

      </main>

        <Footer />

    </div>

  );
}

export default App;
