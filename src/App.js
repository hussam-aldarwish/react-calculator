import React from "react";
import styled, { createGlobalStyle } from "styled-components";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Input type="text" placeholder="0" disabled />
        <Input type="text" placeholder="0" disabled />
        <Table>
          <tbody>
            <tr>
              <Td>(</Td>
              <Td>)</Td>
              <Td>&lt;-</Td>
              <OperatorBtn>+</OperatorBtn>
            </tr>
            <tr>
              <Td>7</Td>
              <Td>8</Td>
              <Td>9</Td>
              <OperatorBtn>-</OperatorBtn>
            </tr>
            <tr>
              <Td>4</Td>
              <Td>5</Td>
              <Td>6</Td>
              <OperatorBtn>*</OperatorBtn>
            </tr>
            <tr>
              <Td>1</Td>
              <Td>2</Td>
              <Td>3</Td>
              <OperatorBtn>/</OperatorBtn>
            </tr>
            <tr>
              <Td>
                <b>C</b>
              </Td>
              <Td>0</Td>
              <Td>.</Td>
              <EqualsBtn>=</EqualsBtn>
            </tr>
          </tbody>
        </Table>
      </Container>
    </React.Fragment>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: rgb(255,226,218);
    color: rgb(42,42,42);
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;

const Container = styled.div`
  width: 400px;
  background: #fff;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const Td = styled.td`
  font-size: 2em;
  padding: 0.7em;
  text-align: center;
  cursor: default;
  transition: 200ms;
  &:hover {
    background-color: rgb(199, 199, 199);
  }
`;

const OperatorBtn = styled(Td)`
  background-color: rgb(70, 70, 70);
  color: #eee;
  &:hover {
    background-color: #222;
  }
`;

const EqualsBtn = styled(Td)`
  background-color: rgb(255, 160, 51);
`;

const Input = styled.input`
  padding: 16px 10px;
  width: 100%;
  border: 0;
  font-size: 2em;
  background-color: #333;
  color: #eee;
  text-align: right;
`;

export default App;
