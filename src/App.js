import React, { useState, useEffect, useCallback } from "react";
import styled, { createGlobalStyle } from "styled-components";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const append = (data) => {
    setInput((old) => old + data);
  };

  const backspace = () => setInput((old) => old.slice(0, -1));

  const reset = () => {
    setInput("");
    setResult("");
  };

  const calculate = useCallback(() => {
    if (input.length === 0 || input === "") {
      alert("Needs input");
    }
    try {
      setResult(eval(input));
    } catch (e) {
      alert("Invalid input");
    }
  }, [input]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        calculate();
      }
      if (e.key === "Backspace") {
        backspace();
      }
      if (
        e.key === "0" ||
        e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" ||
        e.key === "8" ||
        e.key === "9" ||
        e.key === "+" ||
        e.key === "-" ||
        e.key === "*" ||
        e.key === "/" ||
        e.key === "." ||
        e.key === "," ||
        e.key === "(" ||
        e.key === ")"
      ) {
        append(e.key === "," ? "." : e.key);
      }
      if (e.key === "Escape") {
        reset();
      }
    };

    // add keydown event listener
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      // remove keydown event listener
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [calculate]);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Input type="text" placeholder="0" disabled defaultValue={input} />
        <Input type="text" placeholder="0" disabled defaultValue={result} />
        <Table>
          <tbody>
            <tr>
              <Td onClick={() => append("(")}>(</Td>
              <Td onClick={() => append(")")}>)</Td>
              <Td onClick={() => backspace()}>&lt;-</Td>
              <OperatorBtn onClick={() => append("+")}>+</OperatorBtn>
            </tr>
            <tr>
              <Td onClick={() => append("7")}>7</Td>
              <Td onClick={() => append("8")}>8</Td>
              <Td onClick={() => append("9")}>9</Td>
              <OperatorBtn onClick={() => append("-")}>-</OperatorBtn>
            </tr>
            <tr>
              <Td onClick={() => append("4")}>4</Td>
              <Td onClick={() => append("5")}>5</Td>
              <Td onClick={() => append("6")}>6</Td>
              <OperatorBtn onClick={() => append("*")}>*</OperatorBtn>
            </tr>
            <tr>
              <Td onClick={() => append("1")}>1</Td>
              <Td onClick={() => append("2")}>2</Td>
              <Td onClick={() => append("3")}>3</Td>
              <OperatorBtn onClick={() => append("/")}>/</OperatorBtn>
            </tr>
            <tr>
              <Td onClick={() => reset()}>
                <b>C</b>
              </Td>
              <Td onClick={() => append("0")}>0</Td>
              <Td onClick={() => append(".")}>.</Td>
              <EqualsBtn onClick={() => calculate()}>=</EqualsBtn>
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
  max-width: 400px;
  width: 100%;
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
