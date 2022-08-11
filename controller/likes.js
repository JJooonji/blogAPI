const likeService = require('../services/likes.service');

class LikeController {
  likeservice = new likeService();

  checklike = async (req, res, next) => {
    const { postId } = req.params;
    const { userId } = res.locals.user;
    const likeData = await this.likeservice.createlikeData(postId, userId);

    res.status(200).json({ data: likeData });
  };
  getlikepost = async (req, res, next) => {
    const { userId } = res.locals.user;
    const getliekedPost = await this.likeservice.getlikedPostData(userId);

    res.status(200).json({ data : getliekedPost });
  };
}
module.exports = LikeController;
