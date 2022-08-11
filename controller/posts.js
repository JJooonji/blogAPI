const PostService = require('../services/posts.service');
class PostsController {
  postService = new PostService();

  getALlPosts = async (req, res, next) => {
    
    // const { userId } = res.locals.user;
    // console.log(userId);
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
  
  detailPost = async (req, res, next) =>{
    const {postId} = req.params;
    if(!Number.isInteger(Number(postId))){
      next();
      return;
    }
    const data = await this.postService.detailPost(postId);
    return res.status(200).json(data);
  };
  ediPost = async (req, res, next) =>{
    const { userId } = await res.locals;
    const { postId } = req.params;
    const { title, content } = req.body;
    if(!Number.isInteger(Number(postId))){
      next();
      return;
    }
    await this.postService.ediPost( userId,postId,title,content);
    
    return res.status(201).json({msg : '수정 성공'})
  }
  delPost = async (req, res, next) =>{

    const { userId } = await res.locals;
    const { postId } = req.params;;
    if(!Number.isInteger(Number(postId))){
      next();
      return;
    }
    await this.postService.delPost( userId, postId )
    return res.status(201).json({msg : '삭제 성공'})
  }

}

module.exports = PostsController;
