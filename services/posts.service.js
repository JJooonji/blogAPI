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
  detailPost = async (postId)=>{
    const detailpost = await this.postRepository.detailPost(postId)
    // console.log(detailpost);
    if(detailpost)
    return {
      postId: detailpost.null,
      userId: detailpost.userId,
      nickname: detailpost.nickname,
      title: detailpost.title,
      content: detailpost.content,
      createdAt: detailpost.createdAt,
      updatedAt: detailpost.updatedAt,

    };
  };
  
  ediPost = async(userId,postId,title,content) =>{
    console.log(userId);
    const ediepost = await this.postRepository.detailPost(postId);
    if(ediepost)
    
    return await this.postRepository.ediPost(postId, title, content);
    
  }

  delPost = async(userId,postId) =>{
    console.log(userId)
    const delpost = await this.postRepository.detailPost(postId);
    if(delpost)

    return await this.postRepository.delPost(postId);
  }

}
  
module.exports = PostService;
