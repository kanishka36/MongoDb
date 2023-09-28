const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express. json())

mongoose.connect("mongodb://localhost:27017/crud");

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const UserModel = mongoose.model("users", UserSchema);

app.get("/", (req, res) => {
  UserModel.find()
    .then(function (users) {
      res.json(users);
    })
    .catch(function (err) {
      console.log(err);
    });
});


// app.get('/', (req, res)=> {
//   res.json(UserModel.find())
// })

app.listen(3001, () => {
  console.log("server is Running on port 3001");
});
