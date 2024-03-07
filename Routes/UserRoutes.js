const express = require("express");
const { userRegister, getUser } = require("../Controllers/UserController");

const router = express.Router();

router.post("/", userRegister).get("/:name", getUser);

module.exports = router;
