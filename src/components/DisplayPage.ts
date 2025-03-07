import { html } from "hono/html";

const DisplayPage = () => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title></title>
    </head>
    <body>
      <div class="current-post">
        <h1>Got it</h1>
        <h2>1.</h2>
        <h2>2.</h2>
        <h2>3.</h2>
      </div>
      <div class="all-posts">
        <h2>All Posts</h2>
        <form action="/post" method="GET">
          <input type="submit" value="See All Notes" />
        </form>
        <div class="go-home">
          <form action="/" method="GET">
            <input type="submit" value="Go Home" />
          </form>
        </div>
      </div>
    </body>
  </html>
`;

export { DisplayPage };
