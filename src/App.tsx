import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Router from './routes';
import GlobalStyle from './styles/global';
import { AuthProvider } from './hooks/Auth';

const App: React.FC = () => (
  <BrowserRouter>
    <AuthProvider>
      <Router />
    </AuthProvider>
    <GlobalStyle />
    <ToastContainer autoClose={3000} />
  </BrowserRouter>
);

export default App;
