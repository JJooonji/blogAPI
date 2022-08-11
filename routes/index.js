const express = require("express");
const Posts = require("./posts");
const Users = require("./users");
const Likes = require("./likes");

const router = express.Router();

router.use("/posts", Posts);
router.use("/users", Users);
router.use("/posts", Likes);

module.exports = router;
