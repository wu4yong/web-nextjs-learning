import { comments } from "../../../data/comments";
//动态api dynamic api route
const handle = (req, res) => {
    const { commentId } = req.query;
    if(req.method === 'GET'){
        const comment = comments.find(comment => comment.id === +commentId); //find the comment
        return res.status(200).json(comment);
    }else if(req.method === 'DELETE'){
        const deleteComment = comments.find(comment => comment.id === +commentId); //find the comment
        const index = comments.findIndex(c => c.id === +commentId); //find the index of deleteComment
        comments.splice(index, 1); //delete the comment
        res.status(200).json(deleteComment);
    }else if(req.method === 'PUT'){
        const { upComment } = req.body;
        comments.forEach(c => {
            if(c.id === upComment.id) {
                c.text = upComment.text
            }
        })
        res.status(200).json(upComment);
    }
}

export default handle;
