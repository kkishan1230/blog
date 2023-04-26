const express = require("express");
const cors = require("cors");
require("./database/config");
const UserDetails = require("./database/User");

const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;

// listening
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// get
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// post
app.post("/register", async (req, res) => {
  const user = await new UserDetails(req.body);
  const result = user.save();
  res.send(user);
});
