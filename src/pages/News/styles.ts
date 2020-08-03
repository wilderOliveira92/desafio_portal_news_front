import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    strong {
      font-size: 40px;
    }
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

    button {
      background: #e39532;
      border-radius: 8px;
      height: 40px;
      width: 100%;
    }

    a {
      display: flex;
      align-items: center;
      margin: 5px;

      span {
        margin-left: 5px;
      }
    }
  }
`;
