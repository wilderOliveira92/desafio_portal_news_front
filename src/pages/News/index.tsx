import React, { useRef, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { toast } from 'react-toastify';

import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import api from '../../services/api';

import { Container } from './styles';

interface FormData {
  title: string;
  publication: Date;
  content: string;
}

const News: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const { state } = useLocation();

  useEffect(() => {}, []);

  async function handleSubmit(data: FormData) {
    try {
      const response = await api.post('/news', data);
      console.log(response.data);

      toast.success('Notícia cadastrada com sucesso.');

      formRef.current?.reset();
    } catch (err) {
      toast.error('Erro ao cadastrar notícia.');
    }
  }

  async function handleUpdate(data: FormData) {
    try {
      console.log(data);
      const response = await api.patch(`/news/${state?.oneNews.id}`, data);

      toast.success('Notícia Alterada com sucesso.');

      history.goBack();
    } catch (err) {
      toast.error('Erro ao cadastrar notícia.');
    }
  }

  return (
    <Container>
      <header>
        <h1>Cadatro de notícias</h1>
      </header>
      <Form
        initialData={state?.oneNews}
        ref={formRef}
        onSubmit={state?.oneNews ? handleUpdate : handleSubmit}
      >
        <Input name="title" type="text" placeholder="Titulo da notícia" />

        <Input
          name="publication"
          type="date"
          placeholder="Data da publicação"
        />
        <TextArea
          name="content"
          placeholder="Digite aqui o texto da publicação"
          cols={30}
          rows={10}
        />
        <div>
          <button type="submit">
            {state?.oneNews ? 'Alterar' : 'Cadastrar'}
          </button>
          <Link to="/dashboard">Voltar</Link>
        </div>
      </Form>
    </Container>
  );
};

export default News;
