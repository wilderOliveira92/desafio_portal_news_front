import React, { useRef } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { useAuth } from '../../hooks/Auth';

import Input from '../../components/Input';

import { Container } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: SignInFormData) {
    try {
      const { email, password } = data;
      await signIn({ email, password });

      history.push('/dashboard');
    } catch (err) {
      toast.error('Falha na autenticação.');
    }
  }

  return (
    <Container>
      <h1>Faça seu login</h1>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          placeholder="Seu E-mail"
          icon={FiMail}
        />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha"
          icon={FiLock}
        />
        <button type="submit">Entrar</button>
      </Form>

      <Link to="/signup">
        <FiLogIn />
        <span>Criar usuário</span>
      </Link>
    </Container>
  );
};

export default SignIn;
