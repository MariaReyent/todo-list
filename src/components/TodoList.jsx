import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todo } = props;

  return (
    <ul className="main">
      {todo.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
