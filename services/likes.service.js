const likeRepository = require('../repositories/likes.repository');

class likeService {
  likeRepository = new likeRepository();

  createlikeData = async (postId, userId) => {
    const checkedPost = await this.likeRepository.checkedPost(postId);
    if (!checkedPost) {
      return { success: false, errorMessage: '존재하지 않는 게시물입니다.',};
    }
    const ckeckedliked = await this.likeRepository.checkedliked(postId, userId);
    console.log(ckeckedliked.length);
    if (!ckeckedliked.length) {
      await this.likeRepository.addlike(postId, userId);
      return { Message: '좋아요' };
    }
    if (ckeckedliked.length) {
      await this.likeRepository.deletelike(postId, userId);
      return { Message: '좋아요 취소' };
    }
  };
  getlikedPostData = async (userId) => {
    const likedposts = await this.likeRepository.findAllpostliked(userId);
    if (!likedposts.length) {
      return { success: false, errorMessage: '좋아요한 게시물이 없습니다.' };
    }
    const likedpostId = likedposts.map((table) => table.postId);
    const Posts = await this.likeRepository.findAllposts(likedpostId);
    let likedPosts = Posts.map((post) => {
      return {
        postId: post.postId,
        userId: post.userId,
        nickname: post.nickname,
        title: post.title,
        contents: post.contents,
        likes: post.likes.length,
      };
    });

    const LikedpostId = likedPosts.sort(function (a, b) {
      return b.likes - a.likes;
    });

    return LikedpostId;
  };
}

module.exports = likeService;
