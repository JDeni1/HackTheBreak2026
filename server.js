// const express = require("express");
const port = process.env.PORT || 8080;
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.get("/", function (req, res) {
  let doc = fs.readFileSynic("/main.html", "utf 8");
  res.send(doc);
});

app.listen(process.env.PORT || 8080);
console.log("Server is running on port ${process.env.PORT}");
