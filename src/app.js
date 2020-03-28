
import React from 'react';
import ReactDOM from 'react-dom';
import TodoListView from './components/TodoListView';
import TodoList from './models/TodoList';

const store = new TodoList();

ReactDOM.render(
    <TodoListView todoList={store} />
    , document.getElementById('root'));
