import React, { useState } from 'react';
import {useMutation} from "react-query";
import axios from "axios";

const Comment = ({comment, refetch}) => {
    const [isEdit, setIsEdit] = useState(false);
    const [uc, setUc] = useState(comment.text);
    const { mutate: deleteCommentsMutate } = useMutation((id) => axios.delete(`/api/comments/${id}`), {
        onSuccess: (res) => {
            //response的data
            console.log(res.data);
            refetch();
        }
    });

    const { mutate: updateCommentMutate } = useMutation((upComment) => axios.put(`/api/comments/${upComment.id}`, {upComment}), {
        onSuccess: (res) => {
            //response的data
            console.log(res.data);
            //更新之后要refetch
            refetch();
        }
    });

    const deleteComment = async (id) => {
        deleteCommentsMutate(id);
    }

    const updateComment = (upComment) => {
        updateCommentMutate(upComment);
    }

    const handelUpdate = async (e) => {
        if(e.keyCode === 13){
            if(!uc.trim() || uc.trim() === comment) return setIsEdit(false);
            const updatedComment = {
                id: comment.id,
                text: uc
            }
            updateComment(updatedComment);
            return setIsEdit(false);
        }
    }

    return (
        <div>
            {
                !isEdit ? <p>{comment.id} -- {comment.text}</p> : (
                    <>
                        {comment.id} --
                        <input
                            type='text'
                            defaultValue={uc}
                            onChange={(e) => setUc(e.target.value)}
                            onKeyDown={handelUpdate}
                        />
                        <br/>
                    </>
                )
            }
            <button onClick={() => deleteComment(comment.id)}>删除</button>
            <button onClick={() => setIsEdit(prev => !prev)}>{isEdit ? '取消' : '更新'}</button>
        </div>
    );
};

export default Comment;
