import {comments} from "../../../data/comments";

//get request
const handler = (req, res) => {
    if(req.method === 'GET'){
        res.status(200).json(comments)
    }else if(req.method === 'POST') {
        const nc = req.body.newComment;
        const newComment = {
            id: Date.now(),
            text: nc
        }
        comments.push(newComment);
        res.status(201).json(newComment)
    }
}


//post request




export default handler;
