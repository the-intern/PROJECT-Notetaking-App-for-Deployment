import { html } from "hono/html";
import { styles } from "../style.ts";
import { PostForm } from "./FormPage.ts";

const HomePage = () => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      ${styles()}
      <title>Notes</title>
    </head>
    <body>
      <h1>HomePage</h1>
      ${PostForm()}
    </body>
  </html>
`;

export { HomePage };
