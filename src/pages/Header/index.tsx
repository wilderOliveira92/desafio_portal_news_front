import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

import { useAuth } from '../../hooks/Auth';
import { Container, Sign } from './styles';

const Header: React.FC = () => {
  const { signOut } = useAuth();
  const history = useHistory();

  function handleLogOut() {
    signOut();
    history.push('/');
  }

  return (
    <Container>
      <Sign>
        <button type="button" onClick={handleLogOut}>
          Sair
        </button>
        <FiLogOut size={20} />
      </Sign>
    </Container>
  );
};

export default Header;
