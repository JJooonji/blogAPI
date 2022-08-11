const { like } = require('../models');
const { Posts } = require('../models');
const { Op } = require('sequelize');

class likeRepository {
  checkedPost = async (postId) => {
    const checkpostId = await Posts.findOne({ where: { postId: postId } });
    return checkpostId;
  };
  checkedliked = async (postId, userId) => {
    const checklikedata = await like.findAll({
      where: { [Op.and]: [{ postId: postId }, { userId: userId }] },
    });
    return checklikedata;
  };
  addlike = async (postId, userId) => {
    const addlikeData = new like({
      postId,
      userId,
    });
    await addlikeData.save();
    return addlikeData;
  };

  deletelike = async (postId, userId) => {
    const deletelikeData = like.destroy({
      where: { postId: postId, userId: userId },
    });
    return deletelikeData;
  };
  findAllpostliked = async (userId) => {
    const likedposts = like.findAll({ where: { userId: userId } });
    return likedposts;
  };

  findAllposts = async (likedpostId) => {
    Posts.hasMany(like, { foreignKey: 'postId' });
    like.belongsTo(Posts, { foreignKey: 'postId' });
    const Posts = await Posts.findAll({
      where: { postId: likedpostId },
      include: [
        {
          model: like,
        },
      ],
    });
    return Posts;
  };
}

module.exports = likeRepository;
