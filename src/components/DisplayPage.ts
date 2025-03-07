import { html } from "hono/html";
import { styles } from "../style.ts";
import { style } from "https://jsr.io/@hono/hono/4.7.4/src/jsx/intrinsic-element/components.ts";

const DisplayPage = () => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      ${styles()}
      <title>Display</title>
    </head>
    <body>
	<div class="current-post">
      <h1>Duly Noted</h1>
    </div>
    <div class="all-posts">
      <form action="/post" method="GET">
        <input type="submit" value="See All Notes" />
      </form>
    </div>
    <div class="go-home">
      <form action="/" method="GET">
        <input type="submit" value="Go Home" />
      </form>
    </div>
  </html>
`;

export { DisplayPage };
