import { Hono } from "hono";
import { HomePage } from "./components/HomePage.ts";
import { DisplayPage } from "./components/DisplayPage.ts";
import { GetNotesPage } from "./components/GetNotes.ts";
//
const currentDirectory = Deno.cwd();

// ddp_Eom1HdzbbDxRdsRL8pJVzT3dUoM1To1lgfes

/**
import { Hono } from "hono";
import { serve } from "@hono/deno-std-http";
import { kv } from "https://deno.land/x/kv/mod.ts";

const app = new Hono();

app.get("/form", async (c) => {
  // Retrieve the last submitted data from Deno KV
  const lastEntry = await kv.get<string>("last_submission");
  const savedData = lastEntry.value ?? "No previous data found.";

  return c.html(`
    <form action="/form" method="post">
      <input type="text" name="data" placeholder="Enter something" required>
      <button type="submit">Submit</button>
    </form>
    <p>Last submitted data: ${savedData}</p>
  `);
});

app.post("/form", async (c) => {
  // Retrieve form data
  const body = await c.req.parseBody();
  const data = body.data as string || "No data received";

  // Store in Deno KV
  await kv.set("last_submission", data);

  return c.html(`
    <p>You submitted: ${data}</p>
    <a href="/form">Go back</a>
  `);
});
serve(app);
 */

// const dBase = await Deno.openKv(currentDirectory + "/data/dataBase");
const dBase = await Deno.openKv(
  "https://api.deno.com/databases/krt-the-intern-trk/connect"
);

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
  const stored = await dBase.getMany([[key2]]);
  console.log(stored);
  return c.html(GetNotesPage());
});

// * post page from home
app.post("/post", async (c) => {
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
