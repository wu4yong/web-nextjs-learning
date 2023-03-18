import React from 'react';
import {comments} from "../../data/comments";

const CommentDetail = ({ comment }) => {
    return (
        <div>
            <h2>{comment.id} -- {comment.text}</h2>
        </div>
    );
};

export async function getStaticPaths(){
    return {
        paths: [
            {params: {commentId: '1'}},
            {params: {commentId: '2'}},
            {params: {commentId: '3'}}
        ],
        fallback: false
    }
}

//SSG
export async function getStaticProps({ params }) {
    //在这里最好不要call api route
    const { commentId } = params
    const comment = comments.find(c => c.id === commentId);
    return {
        props: {
            comment
        }
    }
}

export default CommentDetail;
