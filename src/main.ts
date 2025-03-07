import { Hono } from "hono";
import { HomePage } from "./components/HomePage.ts";
import { DisplayPage } from "./components/DisplayPage.ts";
import { GetNotesPage } from "./components/GetNotes.ts";
//
// const currentDirectory = Deno.cwd();

// const dBase = await Deno.openKv(
//   "https://api.deno.com/databases/krt-the-intern-trk/connect"
// );

const app = new Hono();

// kv testing
// const key1: string = "KEY1";
const key2: string = "KEY2";

// * home page
app.get("/", (c) => {
  return c.html(HomePage());
});

// * get posts
app.get("/post", async (c) => {
  const dBase = await Deno.openKv();

  const stored = await dBase.getMany([[key2]]);
  console.log(stored);
  return c.html(GetNotesPage());
});

// * post page from home
app.post("/post", async (c) => {
  const dBase = await Deno.openKv();

  const body = await c.req.formData();
  const title = body.get("title");
  const tag = body.get("tag");
  const note = body.get("note");

  const resp = {
    title,
    tag,
    note,
  };

  await dBase.set([key2], resp);
  return c.html(DisplayPage());
});

Deno.serve(app.fetch);
