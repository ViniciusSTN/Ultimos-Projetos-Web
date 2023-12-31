import React from "react";
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './tarefas.css';

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        // essa key é para o evitar erro no react (tirar e ver o erro no navegador)
        <li key={tarefa}>
          {tarefa}
          <div>
            <FaEdit
              className="edit"
              onClick={(e) => handleEdit(e, index)}
            />

            <FaWindowClose
              className="delete"
              onClick={(e) => handleDelete(e, index)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
