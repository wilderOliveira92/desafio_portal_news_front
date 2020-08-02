import React from 'react';
import { RouteProps, Route as RouteDOM, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/Auth';

interface RoutePropsAdd extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RoutePropsAdd> = ({ component: Component, ...rest }) => {
  const { signed } = useAuth();

  if (!signed) {
    return <Redirect to="/" />;
  }

  return (
    <RouteDOM
      {...rest}
      render={({ location }) => {
        return <Component />;
      }}
    />
  );
};

export default Route;
