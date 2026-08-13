import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the adults landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Школа рисования, где учат/);
  assert.match(html, /Почему взрослые начинают рисовать именно у нас/);
  assert.match(html, /Базовый курс/);
  assert.match(html, /Как проходит бесплатное занятие/);
  assert.match(html, /Мне 30, 40 или 50 лет/);
  assert.match(html, /Снежная, 17к2/);
  assert.doesNotMatch(html, /codex-preview|Building your site/);
});

test("keeps content and metadata aligned to the 14+ audience", async () => {
  const [page, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);
  assert.match(page, /для взрослых и подростков/);
  assert.match(page, /24 занятия/);
  assert.match(layout, /взрослых и подростков/);
  assert.doesNotMatch(layout, /для детей 4/);
});
