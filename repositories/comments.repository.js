const Comments = require('../models/comments');

class CommentRepository {
    //댓글조회
    getCommentsById = async (postId) => {
        const getAllComment = await Comments.findByPk(postId)

        console.log(postId, '댓글레포 조회 postId 확인')
        return getAllComment;
    };

    //댓글 생성
    postComments = async (postId, commentId, nickname, comment) => {
        const createCommentData = await Comments.create({
            postId,
            commentId,
            nickname,
            comment
        })

        console.log(createCommentData, '댓글레포 생성 createCommentData 확인!!')

        return createCommentData;
    };

    //댓글 수정
    updateComment = async (commentId, comment) => {
        const updateCommentData = await Comments.update(
            {comment},
            {where: {commentId}}
        )
        
        return updateCommentData;
    };

    //댓글 삭제
    deleteComment = async (commentId, comment) => {
        const updateCommentData = await Comments.destroy({
            where: {commentId, comment}
        })

        return deleteComment;
    };
};

module.exports = CommentRepository;