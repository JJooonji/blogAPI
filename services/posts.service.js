const PostRepository = require('../repositories/posts.repository');

class PostService {
  postRepository = new PostRepository();
  findAllPost = async (req, res) => {
    const allPost = await this.postRepository.findAllPost();
    return allPost.map((post) => {
      return { ...post };
    });
  };
  createPost = async (nickname, password, title, content) => {
    const createPostData = await this.postRepository.createPost(
      nickname,
      password,
      title,
      content
    );

    return {
      postId: createPostData.null,
      nickname: createPostData.nickname,
      title: createPostData.title,
      content: createPostData.content,
      createdAt: createPostData.createdAt,
      updatedAt: createPostData.updatedAt,
    };
  };
}
module.exports = PostService;
