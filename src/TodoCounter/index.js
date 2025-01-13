import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter () {

  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)

  const allTasksCompleted = completedTodos === totalTodos && totalTodos > 0;

    return (
      <h1>
        {allTasksCompleted
        ? "¡Felicidades! Has completado todas las tareas 🎉"
        : `Has completado ${completedTodos} de ${totalTodos} TO DO'S`}
      </h1>
    );
  }

 export { TodoCounter };