const express = require("express");
const { getUsers, addUser } = require("../controllers/user.controller");
const router = express.Router();

router.get("/getUsers", getUsers);
router.post("/addUser", addUser);

module.exports = router;
