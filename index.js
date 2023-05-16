import express from "express";
import path from "node:path";
import * as dotenv from "dotenv";

const __dirname = process.cwd();
const app = express(server);

app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.get("/chat", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "chat.html"));
});

app.get("/404", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "404.html"));
});

app.get("/*", (req, res) => {
  res.redirect("/404");
});
