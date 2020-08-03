import React, { useRef } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { toast } from 'react-toastify';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import Input from '../../components/Input';

import api from '../../services/api';
import { Container } from './styles';

interface FormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = async (data: FormData) => {
    try {
      await api.post('user', data);

      toast.success('Usuário criado com sucesso.');

      history.push('/');
    } catch (err) {
      toast.error('Erro ao cadastrar usuário.');
    }
  };

  return (
    <Container>
      <h1>Faça seu cadastro</h1>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input icon={FiUser} name="name" type="text" placeholder="Seu nome" />
        <Input
          icon={FiMail}
          name="email"
          type="email"
          placeholder="Seu E-mail"
        />
        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="Sua senha"
        />
        <button type="submit">Cadastrar</button>
      </Form>

      <Link to="/">
        <FiArrowLeft />
        <span> Voltar para login </span>
      </Link>
    </Container>
  );
};

export default SignUp;
