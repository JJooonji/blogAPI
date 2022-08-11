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
  detailPost = async(postId)=>{
    const detailPostData = await Posts.findOne({where : {postId}});
    return detailPostData
  }

  ediPost = async(postId, title, content) =>{
    const updatePost = await Posts.update({title, content}, {where : {postId}});
    return updatePost;
  }

  delPost = async(postId)=>{
    const deletePost = await Posts.destroy({where :{postId}});

    return deletePost;

  }
}

module.exports = PostRepository;
