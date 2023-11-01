import React from "react";

import PropTypes from 'prop-types';

import { FaPlus } from 'react-icons/fa';
import './form.css';

// destructuring do parâmetro props
export default function Form({ handleChange, handleSubmit, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input
        onChange={handleChange}
        type="text"
        value={novaTarefa}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

// caso não for required precisa ter um valor padrão, ex: novaTarefa: PropTypes.string,
// Form.defaultProps = {
//   novaTarefa: 'valor padrão'
// };

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
