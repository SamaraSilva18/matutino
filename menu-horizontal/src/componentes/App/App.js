import './App.css';
import React from 'react';

import Inicio from '../Inicio/Inicio.jsx';
import Header from '../Header/Header.jsx';

import Parceiros from '../Parceiros/Index.jsx';
import Footer from '../Footer/Footer.jsx';


import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>

        <Header />

      <main>
        <Switch>
          <Route exact path="/" render = {(props) => <Inicio/>}> </Route>
          <Route exact path="/parceiros" render = {(props) => <Parceiros/>}> </Route>
        </Switch>

      </main>

        <Footer />

    </div>

  );
}

export default App;
