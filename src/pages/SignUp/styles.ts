import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 50vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    button {
      background: #e39532;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 8px;
      color: #312e38;
      width: 100%;
      font-weight: 500;
      margin-top: 16px;

      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#e39532')};
      }
    }
  }

  a {
    display: flex;
    align-items: center;

    span {
      margin-left: 5px;
    }
  }
`;
