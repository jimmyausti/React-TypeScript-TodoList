import React, { FC, useState, ChangeEvent } from 'react';
import './App.css'
import Input from './components/Input';
import { Todo } from './model';
import TodoList from './components/TodoList';


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Array<Todo>>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if (todo) {
      setTodoList([...todoList, {id: Date.now(), todo, isDone: false}]);
      setTodo('');
    }
  };

  console.log(todoList);

  return (
    <div className="App">
      <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  )
}

export default App
