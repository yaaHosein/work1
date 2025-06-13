import express from "express";

var app = express();

console.log("Foo");

app.get("/", (req, res) => {
  res.send("Foo");
});

app.get("/shirt", (req, res) => {
  res.send("foo");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
