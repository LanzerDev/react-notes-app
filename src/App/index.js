import React from "react";
import { AppUI } from "./AppUI";
import { ToDoProvider } from '../ToDoContext'
function App() {

  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
}

export default App;
