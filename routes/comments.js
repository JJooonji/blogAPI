const express = require('express');
const Comments = require('../controller/comments');
const CommnetsController = new Comments();
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router
  .route('/:postId')
  .get(authMiddleware, CommnetsController.getComment)
  .post(authMiddleware, CommnetsController.postComment)
router
  .route('/:commentId')
  .put(authMiddleware, CommnetsController.updateComment)
  .delete(authMiddleware, CommnetsController.deleteComment)

module.exports = router;
