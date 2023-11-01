import React, { Component } from "react";

import Form from './Form';
import Tarefas from './Tarefas';

import './Main.css';

export default class Main extends Component {

  // hoje é possivel inicializar o state sem o constructor, por conta do class fields
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
  };

  // quando o componente é montado
  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem("tarefas"));

    if (!tarefas) return;

    this.setState({ tarefas });
  }

  // quando o componente é atualizado
  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return;

    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let {novaTarefa} = this.state;
    novaTarefa = novaTarefa.trim();

    // se a tarefa já existir
    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];

    // para saber se está editando ou criando nova tarefa
    if (index === -1) {
      // criando
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: '',
      })
    } else {
      // editando
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
        novaTarefa: '',
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  handleEdit = (e, index) => {
    const { tarefas } = this.state;

    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  }

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    });
  }

  render() {
    const {novaTarefa, tarefas} = this.state;

    return (
      // className refere-se a class do html
      <div className="main">
        <h1>Lista de tarefas</h1>

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />

        <Tarefas
          tarefas={tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />

      </div>
    );
  }
}
