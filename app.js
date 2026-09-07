import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import nitro from "./dist/server/index.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, "dist/client")));

app.use(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  const request = new Request(url, {
    method: req.method,
    headers: new Headers(req.headers),
  });

  try {
    const response = await nitro.fetch(request);
    res.status(response.status);
    response.headers.forEach((value, key) => res.setHeader(key, value));
    res.send(await response.text());
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
