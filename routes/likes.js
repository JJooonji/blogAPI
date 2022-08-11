const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const LikeController = require('../controller/likes')
const likeController = new LikeController()

router.get('/like',authMiddleware,likeController.getlikepost);
router.put('/:postId/like',authMiddleware,likeController.checklike);


module.exports = router;