const express = require("express");

const app = express();

app.get("/test", (req, res) => {
  return res.json({ hello: "world2" });
});

app.listen(3333);
