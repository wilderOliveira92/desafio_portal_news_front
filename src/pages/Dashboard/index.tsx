import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { FiPlusSquare, FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';

import Header from '../Header';
import api from '../../services/api';
import { Container } from './styles';

interface INewsData {
  id: string;
  title: string;
  content: string;
  publication: string;
}

const Dashboard: React.FC = () => {
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
            publication: format(parseISO(oneNews.publication), 'yyyy-MM-dd', {
              locale: pt,
            }),
          };
        });

        //"d 'de' MMMM 'de' yyyy",

        setNews(newsFormated);
      } catch (err) {
        toast.error('Falha ao carregar as noiticias.');
      }
    }

    listNews();
  }, []);

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

  async function handleUpdate(oneNews: INewsData) {
    history.push({ pathname: '/news', state: { oneNews } });
  }

  return (
    <Container>
      <Header />
      <header>
        <span></span>
        <strong>Portal News</strong>
      </header>

      <div id="create-new">
        <Link to="/news">{<FiPlusSquare size={25} />}</Link>
        <span> Criar notícia</span>
      </div>

      <ul>
        {news &&
          news.map((oneNews) => (
            <li key={oneNews.id}>
              <strong>{oneNews.title}</strong>
              <div>
                <span>
                  Publicação em{' '}
                  {oneNews.publication &&
                    format(
                      parseISO(oneNews.publication),
                      "d 'de' MMMM 'de' yyyy",
                      {
                        locale: pt,
                      },
                    )}
                </span>
                <div>
                  <a onClick={() => handleUpdate(oneNews)}>
                    <FiEdit size={20} />
                  </a>
                  <a onClick={() => handleDelete(oneNews.id)}>
                    <AiOutlineDelete size={20} />
                  </a>
                </div>
              </div>
              <p>{oneNews.content}</p>
            </li>
          ))}
      </ul>
    </Container>
  );
};

export default Dashboard;
