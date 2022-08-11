const express = require("express");
const Posts = require("./posts");
const Users = require("./users");

const router = express.Router();

router.use("/posts", Posts);
router.use("/users", Users);

module.exports = router;
