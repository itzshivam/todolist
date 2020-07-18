import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import VisibilityFilters from './components/VisibilityFilters';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>ToDo App</h1>
        <AddTodo/>
        <TodoList/>
        <VisibilityFilters/>
      </div>
    );
  }
}

export default App;
