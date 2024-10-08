/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useTodo } from "../context/TodoContext";
import { useNavigate } from "react-router-dom";

const TodoList = ({ todo }) => {
  const { deleteTodo, updateTodo } = useTodo();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deleteTodo(todo._id);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheck = async (e) => {
    const newCheckTodo = e.target.checked;
    await updateTodo(todo._id, { checkTodo: newCheckTodo });
  };

  const handleUpdateTodo = () => {
    navigate(`/todo/${todo._id}`);
  };

  return (
    <li
      className={`flex justify-between text-center flex-wrap rounded-full items-center mx-4 my-4 shadow-md px-8 py-4 gap-2 w-80 md:w-[450px] font-montserrat font-medium ${
        todo.checkTodo && "line-through"
      }`}
    >
      <input
        className="w-[20px] h-[20px] rounded-xl"
        type="checkbox"
        onChange={handleCheck}
        checked={todo.checkTodo}
      />

      {/* Burada min-width ve flex-grow ekliyoruz */}
      <p className="font-roboto text-sm md:text-base break-words overflow-wrap flex-grow min-w-0">
        {todo.description}
      </p>

      <div className="flex gap-2">
        <button onClick={handleUpdateTodo}>
          <CiEdit className="text-xl text-orange-500" />
        </button>
        <button onClick={handleDelete}>
          <MdDelete className="text-lg text-red-500" />
        </button>
      </div>
    </li>
  );
};

export default TodoList;
