const PostService = require('../services/posts.service');
class PostsController {
  postService = new PostService();

  getALlPosts = async (req, res, next) => {
    const { userId } = res.locals.user;
    console.log(userId);
    const posts = await this.postService.findAllPost();
    console.log(posts);
    return res.status(200).json({ data: posts });
  };
  createPost = async (req, res, next) => {
    const { nickname, password, title, content } = req.body;
    const createPostData = await this.postService.createPost(
      nickname,
      password,
      title,
      content
    );

    res.status(201).json({ data: createPostData });
  };
}

module.exports = PostsController;
