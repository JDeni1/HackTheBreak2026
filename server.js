const express = reqire("express");
const app = express;

// app.get("/", function (req, res) {
//  let doc = fs.readFileSynic("./", "utf 8")
// });

app.get("/", (req, res) => res.send("Deployed!"));

app.listen(process.env.PORT || 8080);
console.log("Server is running on port ${process.env.PORT}");
