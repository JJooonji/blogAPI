const express = require('express');
const Posts = require('../controller/posts');
const PostsController = new Posts();
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router
  .route('/')
  .get(PostsController.getALlPosts)
  .post(authMiddleware,PostsController.createPost);
router  
  .route('/:postId')
  .get(PostsController.detailPost)
  .put(authMiddleware,PostsController.ediPost)
  .delete(authMiddleware,PostsController.delPost);
module.exports = router;
