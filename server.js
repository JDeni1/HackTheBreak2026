// const express = require("express");
const port = process.env.PORT || 8080;
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.use(express.static(__dirname));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "main.html"));
});

app.listen(process.env.PORT || 8080);
console.log("Server is running on port ${process.env.PORT}");
