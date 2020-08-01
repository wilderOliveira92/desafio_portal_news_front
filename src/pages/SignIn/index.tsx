import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { useAuth } from '../../hooks/Auth';

import { Container } from './styles';

const SignIn: React.FC = () => {
  const { signIn, user } = useAuth();
  const history = useHistory();

  const [email, setEmail] = useState('wilder@gmail.com');
  const [password, setPassword] = useState('123456');

  console.log(user);

  async function handleSubmit() {
    await signIn({ email, password });

    history.push('/dashboard');
  }

  return (
    <Container>
      <h1>Faça seu login</h1>

      <Form onSubmit={handleSubmit}>
        <input type="email" id="email" />
        <input type="text" id="password" />
        <input type="submit" value="Entrar" />
      </Form>

      <h1>SignIn</h1>
    </Container>
  );
};

export default SignIn;
