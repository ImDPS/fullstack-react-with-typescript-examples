import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AddItemButton, AppContainer } from './styles';
import { Column } from "./Column"
import { Card } from "./Card"

import { AddNewItem } from "./AddNewItem"
import { Statement } from 'typescript';

// const counterReducer = (state: Statement, action: Action) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 }
//   }
// }

const App = () => {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app Scaffold"/>
      </Column>
      <Column text="In Progress">
        <Card text="Learn TypeScript" />
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing" />
      </Column>
      <AddNewItem 
        toggleButtonText="+ Add another list"
        onAdd={console.log}
      />
    </AppContainer>
  );
}

export default App;
