import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT;
const DIST_DIR = path.join(__dirname, "dist", "client");

app.use(express.static(DIST_DIR, { redirect: false }));

app.use((req, res) => {
  const cleanPath = req.path.replace(/\/$/, "") || "/";
  const routeIndex = path.join(DIST_DIR, cleanPath, "index.html");
  if (fs.existsSync(routeIndex)) {
    res.sendFile(routeIndex);
    return;
  }
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
