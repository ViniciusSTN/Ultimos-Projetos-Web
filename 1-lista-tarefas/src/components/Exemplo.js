import React, { Component } from "react";

export default class Main extends Component {

  // hoje é possivel inicializar o state sem o constructor, por conta do class fields
  state = {
    novaTarefa: '', // inicializa state
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    })
  }

  render() {
    const { novaTarefa } = this.state;

    return (
      // className refere-se a class do html
      <div className="main">
        <h1>{novaTarefa}</h1>

        <form action="#">
          <input onChange={this.handleChange} type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

// toda vez que o estado mudar, a função render será chamada e modificará em tempo real no titulo da página


// dentro de App.js, basta importar esse componente e renderizar:

// import React from "react";
// import Main from './components/Main';

// import './App.css';

// export default function App() {
//   return <Main />
// }
