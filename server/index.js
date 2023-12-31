const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 3001;

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", require("./routes/routes"));

app.get("/", (req, res) => {
  res.send("root directory");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
