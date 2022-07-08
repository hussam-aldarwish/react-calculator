import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const append = (e, data) => {
    e.preventDefault();
    setInput((old) => old + data);
  };

  const backspace = (e) => {
    e.preventDefault();
    setInput((old) => old.slice(0, -1));
  };

  const reset = () => {
    setInput("");
    setResult("");
  };

  const claculate = () => {
    if (input.length === 0 || input === "") {
      alert("Needs input");
    }
    try {
      setResult(eval(input));
    } catch (e) {
      alert("Invalid input");
    }
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Input type="text" placeholder="0" disabled value={input} />
        <Input type="text" placeholder="0" disabled value={result} />
        <Table>
          <tbody>
            <tr>
              <Td onClick={(e) => append(e, "(")}>(</Td>
              <Td onClick={(e) => append(e, ")")}>)</Td>
              <Td onClick={(e) => backspace(e)}>&lt;-</Td>
              <OperatorBtn onClick={(e) => append(e, "+")}>+</OperatorBtn>
            </tr>
            <tr>
              <Td onClick={(e) => append(e, "7")}>7</Td>
              <Td onClick={(e) => append(e, "8")}>8</Td>
              <Td onClick={(e) => append(e, "9")}>9</Td>
              <OperatorBtn onClick={(e) => append(e, "-")}>-</OperatorBtn>
            </tr>
            <tr>
              <Td onClick={(e) => append(e, "4")}>4</Td>
              <Td onClick={(e) => append(e, "5")}>5</Td>
              <Td onClick={(e) => append(e, "6")}>6</Td>
              <OperatorBtn onClick={(e) => append(e, "*")}>*</OperatorBtn>
            </tr>
            <tr>
              <Td onClick={(e) => append(e, "1")}>1</Td>
              <Td onClick={(e) => append(e, "2")}>2</Td>
              <Td onClick={(e) => append(e, "3")}>3</Td>
              <OperatorBtn onClick={(e) => append(e, "/")}>/</OperatorBtn>
            </tr>
            <tr>
              <Td onClick={() => reset()}>
                <b>C</b>
              </Td>
              <Td onClick={(e) => append(e, "0")}>0</Td>
              <Td onClick={(e) => append(e, ".")}>.</Td>
              <EqualsBtn onClick={() => claculate()}>=</EqualsBtn>
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
