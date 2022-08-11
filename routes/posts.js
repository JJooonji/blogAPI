const express = require('express');
const Posts = require('../controller/posts');
const PostsController = new Posts();
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router
  .route('/')
  .get(authMiddleware, PostsController.getALlPosts)
  .post(PostsController.createPost);

module.exports = router;
