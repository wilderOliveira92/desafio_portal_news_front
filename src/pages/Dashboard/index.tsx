import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { FiPlusSquare, FiLogOut } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { useAuth } from '../../hooks/Auth';
import api from '../../services/api';
import { Container, Sign } from './styles';

interface INewsData {
  id: string;
  title: string;
  content: string;
  publication: string;
}

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  const history = useHistory();

  const [news, setNews] = useState<INewsData[]>([] as INewsData[]);

  useEffect(() => {
    async function listNews() {
      try {
        const response = await api.get('/news');

        const newsFormated = response.data.map((oneNews: INewsData) => {
          return {
            id: oneNews.id,
            title: oneNews.title,
            content: oneNews.content,
            publication: format(
              parseISO(oneNews.publication),
              "d 'de' MMMM 'de' yyyy",
              { locale: pt },
            ),
          };
        });

        setNews(newsFormated);
      } catch (err) {
        toast.error('Falha ao carregar as noiticias.');
      }
    }

    listNews();
  }, []);

  function handleLogOut() {
    signOut();
    history.push('/');
  }

  async function handleDelete(id: string) {
    try {
      await api.delete(`news/${id}`);

      const newsupdated = news.filter((oneNews) => oneNews.id !== id);

      setNews(newsupdated);

      toast.success('Noticia exluida com sucesso.');
    } catch (err) {
      toast.error('Ocorreu um erro ao tentar excluir a notícia.');
    }
  }

  return (
    <Container>
      <Sign>
        <button type="button" onClick={handleLogOut}>
          Sair
        </button>
        <FiLogOut size={20} />
      </Sign>
      <header>
        <span></span>
        <strong>Portal News</strong>
      </header>

      <div>
        <Link to="/news">{<FiPlusSquare size={25} />}</Link>
        <span> Criar notícia</span>
      </div>

      <ul>
        {news &&
          news.map((oneNews) => (
            <li key={oneNews.id}>
              <strong>{oneNews.title}</strong>
              <span>Publicação em {oneNews.publication}</span>
              <p>{oneNews.content}</p>

              <div>
                <button type="submit" onClick={() => handleDelete(oneNews.id)}>
                  editar
                </button>
                <button type="submit" onClick={() => handleDelete(oneNews.id)}>
                  excluir
                </button>
              </div>
            </li>
          ))}
      </ul>
    </Container>
  );
};

export default Dashboard;
