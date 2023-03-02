const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server on port 3000");
});

app.post("/add", (req, res) => {
  console.log(req.body.name + "-" + req.body.id);
  res.status(200).send("Data received");
});

app.listen(3000, () => console.log("Server is running on port 3000"));
