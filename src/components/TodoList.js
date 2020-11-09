/*
    TodoList.js
    여러개의 할 일 항목을 보여줄 리스트
*/
import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function TodoList(){
    const todos = useTodoState();
    return (
        <TodoListBlock>
            {todos.map(todo=> (
                <TodoItem
                    key={todo.id} // 각 행을 구분해주기 위한 키값 (이거 없으면 에러 뜸)
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                />
            ))}           
        </TodoListBlock>
    )
}

export default TodoList;