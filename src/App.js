import React, { Component } from 'react';

import Contador from "./componentes/contador"
// ultilizando o component dentro das chaves, é possivel chamar o componet direto
import "bootstrap/dist/css/bootstrap.min.css";
// boostrap esta sendo ultilizado de um pacote, por isso sem o ./

import "./styles/global.css"



// import logo from './logo.svg';APAGADO
// import './App.css'; APAGADO

class App extends Component {
  render () {
    return <Contador />
  }
}


export default App



 