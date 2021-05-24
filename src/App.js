import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';
import ListItem from './components/ListItem';
// jsx

const todos = [{todo: "wake up", id: 1},
 {todo: "breakfast", id: 2},
  {todo: "study", id: 3}
]




const App = () => {
  return <div>
     <h1>Todo List</h1>;
     <List toDos={todos} />
      </div>
};

export default App