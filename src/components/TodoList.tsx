import React from 'react'
import { Todo } from '../model';
import './styles.css';

interface Props {
    todoList: Todo[];
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todoList, setTodoList}) => {
  return (
    <div className='main'>
        {todoList.map(todo => (
            <li>{ todo.todo }</li>
        ))}
        
    </div>
  )
}

export default TodoList