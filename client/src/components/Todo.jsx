import { useTodo } from "../context/TodoContext";
import TodoList from "./TodoList";

const Todo = () => {
  const { todos } = useTodo();

  return (
    <>
      <ul
        className={` bg-orange-50 mt-6 rounded-lg overflow-scroll h-[450px] overflow-x-hidden ${
          todos.length === 0 && "overflow-y-hidden"
        }`}
      >
        {todos.map((todo, index) => (
          <TodoList key={todo._id} todo={todo} index={index} />
        ))}
      </ul>
    </>
  );
};

export default Todo;
