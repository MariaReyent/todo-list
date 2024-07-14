import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem("todo", JSON.stringify({ todo: newList }));
  }

  function handleAddTodos(newTodos) {
    const newTodoList = [...todo, newTodos];
    persistData(newTodoList);
    setTodo(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todo.filter((todos, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    setTodo(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todo[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todo");
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todo;
    setTodo(localTodos);
  }, []);

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        handleEditTodo={handleEditTodo}
        todo={todo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

export default App;
