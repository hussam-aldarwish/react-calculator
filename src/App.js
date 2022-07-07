import { css } from "styled-components";

function App() {
  return (
    <section
      css={css`
        padding: 4em;
        background: papayawhip;
      `}
    >
      <h1
        css={css`
          font-size: 1.5em;
          text-align: center;
          color: palevioletred;
        `}
      >
        Hello World!
      </h1>
    </section>
  );
}

export default App;
