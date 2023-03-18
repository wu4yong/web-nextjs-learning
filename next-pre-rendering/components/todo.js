import React, { useState } from 'react';
import {toggleTodo} from "../hooks/useTodo";

const Todo = ({ todo }) => {

    const { mutate } = toggleTodo();
    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState(todo.title);

    const handleToggleTodo = () => {
        const updatedTodo = {
            ...todo,
            completed: !todo.completed
        };
        mutate(updatedTodo);
    };

    const handleEditChange = ( e ) => {
        if(e.keyCode === 13) {
            if(!title.trim() || title.trim() === todo.title) return setEdit(false);
            const updatedTodo = {
                ...todo,
                title: title.trim()
            };
            mutate(updatedTodo);
            return setEdit(false);
        }

    }

    return (
        <div>
            <h2>userId: {todo.userId}</h2>
            <div>
                {
                    !edit ? <p>title: {todo.title}</p> : (
                        <input type='text'
                               defaultValue={title}
                               onChange={(e) => setTitle(e.target.value)}
                               onKeyDown={handleEditChange}
                        />
                    )
                }
                <button onClick={() => { setEdit(prev => !prev); setTitle(todo.title) }}>{!edit ? '修改' : '取消'}</button>
            </div>
            <p onClick={handleToggleTodo}>completed: {todo.completed ? '✔︎':'✖︎'}</p>
            <hr/>
        </div>
    );
};

export default Todo;
