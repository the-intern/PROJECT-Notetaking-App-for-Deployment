import { html } from "hono/html";
import { styles } from "../style.ts";

const GetNotesPage = () => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      ${styles()}
      <title></title>
    </head>
    <body>
      <div class="notes">
        <h1>Notes</h1>
      </div>
      <div class="go-home">
        <form action="/" method="GET">
          <input type="submit" value="Go Home" />
        </form>
      </div>
    </body>
  </html>
`;

export { GetNotesPage };
