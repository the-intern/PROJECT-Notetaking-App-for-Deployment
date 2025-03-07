import { html } from "hono/html";

const styles = () => html`
  <style>
    body {
      font-family: sans-serif;
      background-color: #000;
      color: white;
    }

    form {
      width: 50vw;
      border: 1px solid white;
      padding: 1rem;
    }

    input,
    textarea,
    button {
      width: 100%;
    }

    button {
      background-color: firebrick;
    }

    div {
      margin: 20px;
    }

    label {
      display: inline-block;
      width: 240px;
      padding-right: 10px;
    }
  </style>
`;

export { styles };
