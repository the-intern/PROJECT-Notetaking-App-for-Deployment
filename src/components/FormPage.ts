import { html } from "hono/html";

const PostForm = () => html`
  <div class="form">
    <form action="/post" method="POST">
      <div class="greeting">
        <label for="title">Title</label>
        <input name="title" id="note-title" value="Title Here" />
      </div>

      <div class="recipient">
        <label for="tag">Tag</label>
        <input name="tag" id="note-tag" value="Tag Here" />
      </div>

      <div class="text">
        <label for="note">Note</label>
        <textarea
          name="note"
          id="note-note"
          cols="30"
          rows="10"
          placeholder="Note in here"></textarea>
      </div>
      <input type="submit" value="Record Note" />
    </form>
  </div>
  <div class="go-home">
    <form action="/post" method="GET">
      <input type="submit" value="See All Notes" />
    </form>
  </div>
`;

export { PostForm };
