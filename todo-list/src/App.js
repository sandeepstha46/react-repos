import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Todo from './components/Todo/Todo';
import React, { useState } from 'react'

function App() {

  const onDelete = (todo) => {
    setTodo(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const [todos, setTodo] = useState([
    {
      sno: 1,
      title: 'Go to the market',
      desc: 'You need to go to the market to get this job done'
    },
    {
      sno: 2,
      title: 'Go to the mall',
      desc: 'You need to go to the market to get this job done'
    },
    {
      sno: 3,
      title: 'Go to the hospital',
      desc: 'You need to go to the hospital to get this job done'
    }
  ]);
  return (
    <>
      <Header title="MyTodoList" />
      <Todo todo={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
