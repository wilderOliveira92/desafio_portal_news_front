import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';

import { AuthProvider } from './hooks/Auth';

const App: React.FC = () => (
  <BrowserRouter>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </BrowserRouter>
);

export default App;
