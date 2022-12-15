import React, { Fragment } from 'react';
import './App.css';
import InputTodo from './components/InputTodo';

import ListTodo from "./components/ListTodo";

function App() {
  return <Fragment>
    <InputTodo />
    <ListTodo />
  </Fragment>;
}

export default App;
