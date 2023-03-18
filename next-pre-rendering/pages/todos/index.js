import React, {useMemo} from 'react';
import {dehydrate, QueryClient} from "react-query";
import Todo from "../../components/todo";
import { useTodo, fetchTodos } from "../../hooks/useTodo";

//react-query + SSG
const Todos = () => {
    //使用useQuery获取数据

    const { data: todos, isLoading, error, isError } = useTodo()

    if(isLoading) return <p>Loading...</p>;

    if(isError) return <p>Boom!! An error occurred! error message:{error.message}</p>

    const { completedTodosLength, uncompletedTodosLength, todoList } = useMemo(() => {
        const completedTodosLength = todos.filter(todo => todo.completed).length;
        const uncompletedTodosLength = todos.filter(todo => !todo.completed).length;
        const todoList = todos.map(todo => <Todo key={todo.id} todo={todo} />)
        return {
            completedTodosLength,
            uncompletedTodosLength,
            todoList
        }
    }, [todos])

    return (
        <>
            <h1>todo list</h1>
            <p>
                {completedTodosLength} completed todos, {uncompletedTodosLength} uncompleted todos
            </p>
            {todoList}
        </>
    );
};


export async function getStaticProps(){
    //使用useQuery hook提前取出数据
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(["todos"], fetchTodos);
    return {
        props:{
            dehydratedState: dehydrate(queryClient)
        }
    }
}

export default Todos;
