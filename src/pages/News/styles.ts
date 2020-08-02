import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  header {
    display: flex;
    justify-content: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    place-content: center;

    width: 100%;
    max-width: 700px;

    textarea {
      width: 100%;
      background: #cfcadb;
      margin: 10px;
      border-radius: 8px;
      padding: 10px;
      font-size: 16px;
    }

    div {
      display: flex;

      button {
        background: #e39532;
        border-radius: 8px;
        height: 30px;
        width: 100px;
      }

      a {
        background: #e39532;
        border-radius: 8px;
        height: 30px;
        width: 100px;
        padding: 10px;
      }
    }
  }
`;
