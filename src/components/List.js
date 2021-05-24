import React from 'react';
import ListItem from './../components/ListItem';


// jsx
const List = ({toDos}) => {
  return <ul>
  {toDos.map((element, index) => {
    return <li key={index}> {element.todo} </li>;
  })}
</ul>
};

export default List