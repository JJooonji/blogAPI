const { Posts } = require("../models");

class PostRepository {
  findAllPost = async () => {
    const posts = await Posts.findAll();

    return posts;
  };
  createPost = async (nickname, password, title, content) => {
    const createPostData = await Posts.create({
      nickname,
      password,
      title,
      content,
    });

    return createPostData;
  };
}

module.exports = PostRepository;
