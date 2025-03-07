import { html } from "hono/html";

const styles = () => html`
  <style>
    form {
      width: 420px;
    }

    div {
      margin: 20px;
    }

    .text {
      margin: 2rem;
      overflow: inherit;
      border: 2px solid black;
      padding: 2rem;
    }

    label {
      display: inline-block;
      width: 240px;
      text-align: right;
      padding-right: 10px;
    }

    button,
    input {
      float: right;
    }
  </style>
`;

export { styles };
