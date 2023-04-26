const express = require("express");
const cors = require("cors");
require("./database/config");

const user = require("./database/users");

const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;

// listening
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// get
app.get("/", cors(), (req, res) => {
  res.send("Hello World!");
});

// post
app.post("/", async (req, res) => {
  const data = await req.body;
  console.log(data);
  res.send("Response send");
});
