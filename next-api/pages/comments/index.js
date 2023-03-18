import React, {useEffect} from 'react';
import {useMutation, useQuery} from "react-query";
import axios from "axios";
import Comment from "../../components/comment";

//CSR
const Comments = () => {
    const [comment, setComment] = React.useState('');

    const { data: comments, refetch, isLoading, isError,  error} = useQuery(['comments'],
        () => axios.get('/api/comments').then(res => res.data),
        {
            enabled: false
        }
    );

    const {mutate} = useMutation((newComment) => axios.post('/api/comments', {newComment}), {
        onSuccess: (res) => {
            refetch();
        }
    });

    const handleSubmitComment = async () => {
        mutate(comment);
        setComment('');
    }


    if(isError) return <h1>Error: {error.message}</h1>;

    return (
        <div>
            <div>
                <input type='text' value={comment} onChange={e => setComment(e.target.value)}/>
                <button onClick={handleSubmitComment}>提交评论</button>
            </div>
            <button onClick={refetch}>Load comments</button>
            {
                isLoading ? <h1>Loading...</h1> :
                <>
                    {
                        comments?.map(comment => (
                            <Comment key={comment.id} comment={comment} refetch={refetch}/>
                        ))
                    }
                </>
            }
        </div>
    );
};

export default Comments;
