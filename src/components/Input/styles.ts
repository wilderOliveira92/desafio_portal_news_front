import styled from 'styled-components';

export const Container = styled.div`
  background: #cfcadb;
  border-radius: 10px;
  padding: 8px;
  width: 100%;

  border: 2px solid #646368;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    background: transparent;
    border: 0;
    flex: 1;
    color: #201f1e;
    width: 300px;
    margin-left: 10px;

    &::placeholder {
      color: #666360;
    }
  }
`;
