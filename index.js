const express = require("express");
const PORT = 5000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello 쭈꾸미 월드");
});

app.listen(PORT);
console.log(`Running on port ${PORT}`);
