import React from 'react';
import {useMutation, useQuery, useQueryClient} from "react-query";
import axios from "axios";

//fetchTodo fetcher
export const fetchTodos = () => axios.get('http://localhost:4000/todos').then(res => res.data);
//update todo mutation
export const updateTodo = (todo) => {
    // console.log(todo);
    return axios.put(`http://localhost:4000/todos/${todo.id}`, todo);
}

export const useTodo = () => {
    return useQuery(
        ['todos'],
        fetchTodos,
        {
            staleTime: 60 * 1000 //1 minute
        }
    );
};

export const toggleTodo = () => {
    const queryClient = useQueryClient();

    return useMutation(updateTodo, {
        onMutate: async (todo) => {
           await queryClient.cancelQueries(['todos']);
           const previousTodo = await queryClient.getQueryData(['todos']);
           //乐观更新
            queryClient.setQueryData(['todos'], previousTodo.map(item => item.id === todo.id ? todo : item));
            return { previousTodo };
        },
        onError: (_err, todo, cxt) => {
            //回滚
            queryClient.setQueryData(['todos'], cxt.previousTodo);
        },
        // onSettled: () => {
        //     //无论成功与否都会触发重新获取数据
        //     queryClient.invalidateQueries(['todos']);
        // }
    })
}
