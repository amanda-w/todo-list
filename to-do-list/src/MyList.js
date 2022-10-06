import React from 'react';
import ListItem from './ListItem';

const todoItems = [
    "Listen to Hot Mulligan",
    "Drink hot cocoa",
    "Eat hot cheetos"
];

const MyList = (props) => {
    let items = todoItems.map((item, index) => {
        return <ListItem task={item} key={index} />
    });

  return (
    <div>
    <h1>Things I should stop procrastinating:</h1>
    <ul>
      {items}
    </ul>
  </div>
  );
}

export default MyList;