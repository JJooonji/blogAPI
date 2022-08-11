const CommentRepository = require('../repositories/comments.repository');
const PostRepository = require('../repositories/posts.repository');


class CommentService {
    commentRepository = new CommentRepository();
    postRepository = new PostRepository();

    //댓글작성//commentId, nickname, postId, 
    postComments = async (comment) => {
        //post에서 Id정보 불러오는 이름값 넣기
        // const thisPost = await this.postRepository.findAllPosts(postId);
        if(!thisPost) {
            return { success: false, message: '게시글이 없습니다.'}
        }else if (comment === undefined){
            return { success: false, message: '댓글내용을 입력해주세요.'};
        } else {
            await this.commentRepository.postComments(
            // postId,
            // commentId,
            // nickname,
            comment
        )}
        
        return { 
            postId: createCommentData.postId,
            commentId:createCommentData.commentId,
            nickname: createCommentData.nickname,
            comment:createCommentData.comment,
            createdAt: createCommentData.createdAt,
            updatedAt: createCommentData.updatedAt,
        }
    };

    //댓글 조회
    getCommentsById = async (postId) => {
        const findComments = await this.commentRepository.getCommentsById(postId);

        findComments.sort((a,b) => {
            return b.updatedAt - a.createdAt;
        });

        return{
            postId: findComments.postId,
            commentId:findComments.commentId,
            nickname: findComments.nickname,
            comment:findComments.comment,
            createdAt: findComments.createdAt,
            updatedAt: findComments.updatedAt,
        }
    };

    //댓글 수정
    updateComment = async(commentId, comment) => {
        const findComments = await this.commentRepository.getCommentsById(commentId);

        if(!findComments){
            return { success: false, message: '찾는 댓글이 없습니다.'};
        }else if(comment === undefined){
            return { success: false, message: '댓글내용을 입력해주세요.'};
        } 
        
        await this.commentRepository.updateComment(commentId, comment);
        const updateComment = await this.commentRepository.getCommentsById(commentId);

        return {
            commentId:updateComment.commentId,
            nickname: updateComment.nickname,
            comment:updateComment.comment,
            createdAt: updateComment.createdAt,
            updatedAt: updateComment.updatedAt,
        }
    };

    //댓글 삭제
    deleteComment = async(commentId, comment) => {
        const findComments = await this.commentRepository.getCommentsById(commentId);
        if(!findComments){
            return { success: false, message: '찾는 댓글이 없습니다.'};
        }

        await this.commentRepository.deleteComment(commentId, comment);

        return {
            commentId:deleteComment.commentId,
            nickname: deleteComment.nickname,
            comment:deleteComment.comment,
            createdAt: deleteComment.createdAt,
            updatedAt: deleteComment.updatedAt,
        }
    };
};

module.exports = CommentService;