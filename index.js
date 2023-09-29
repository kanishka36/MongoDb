const express = require("express");
const connectDB = require("./config/db");

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/", require("./routes/user.route"));

app.listen(3001, () => {
  console.log("server is Running on port 3001");
});
