import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function MyRoute({ component: Component, isClosed, ...rest }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isClosed && !isLoggedIn) {
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
}

// isClosed por padrão deve ser false
MyRoute.defaultProps = {
  isClosed: false,
};

// validar o component -> pode ser do tipo elemento ou função
// isClosed -> boolean
MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};

// isClosed refere-se a rotas fechadas
// isLoggedIn -> usuario logado
// prevPath é para saber qual o caminho que estava tentando acessar, para quando ele for direcionado para a pagina de login, será redirecionado para a página que ele estava tentando acessar
