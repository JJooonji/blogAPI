const CommentService = require('../services/comments.service');

class CommentsController {
    commentService = new CommentService();

    //댓글생성
    postComment = async (req, res, next) => {
        const { userId } = res.locals.user;
        console.log(userId, '댓글레포 생성 userId');
        const { postId } = req.params;
        console.log(postId, '댓글레포 생성 postId');
        const { nickname, comment } = req.body;

        const createCommentData = await this.commentService.postComments(
            userId,
            postId,
            nickname,
            comment
        )
        res.status(201).json({ data: createCommentData})
        // return res.status(status).send({message})
    }

    //댓글 조회
    getComment = async (req, res, next) => {
        const { userId } = res.locals.user;
        console.log(userId, '댓글레포 조회 userId');
        const { postId } = req.params;
        console.log(postId, '댓글레포 조회 postId');

        const comments = await this.commentService.getCommentsById(postId);

        res.status(200).json({ data: comments})
    }

    //댓글 수정
    updateComment = async (req, res, next) => {
        const { userId } = res.locals.user;
        console.log(userId, '댓글레포 수정 userId');
        const { commentId } = req.params;
        const { comment } = req.body;

        const updateComment = await this.commentService.updateComment(
            userId,
            commentId,
            comment
        )

        res.status(200).json({ data: updateComment})
    };

    //댓글 삭제
    deleteComment = async (req, res, next) => {
        const { userId } = res.locals.user;
        console.log(userId, '댓글레포 삭제 userId');
        const { commentId } = req.params;
        const { comment } = req.body;

        const deleteComment = await this.commentService.deleteComment(
            userId,
            commentId,
            comment
        )

        res.status(200).json({ data: deleteComment})
    };
};

module.exports = CommentsController;