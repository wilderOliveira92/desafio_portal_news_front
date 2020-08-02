import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 80%;
  margin: auto;
  margin-top: 20px;

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    strong {
      font-size: 40px;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: right;
    margin-top: 30px;

    span {
      font-size: 20px;
    }
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 10px;

    li {
      padding: 20px;
      border-radius: 4px;
      background: #dedbe6;

      strong {
        display: flex;
        font-size: 30px;
        font-weight: bold;
        justify-content: center;
      }

      span {
        display: flex;
        margin-top: 8px;
        font-size: 12px;
        justify-content: left;
      }

      p {
        margin-top: 20px;
        color: #201f1e;
      }
      div {
        display: flex;
        align-items: center;
        justify-content: right;

        button {
          background: #e39532;
          border-radius: 8px;
          height: 30px;
          width: 100px;
        }
      }
    }
  }
`;

export const Sign = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;

  button {
    background: none;
    border: 0;
  }

  span {
    display: block;
  }
`;
