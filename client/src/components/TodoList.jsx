/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useTodo } from "../context/TodoContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TodoList = ({ todo }) => {
  const { description } = todo;
  const { deleteTodo } = useTodo();
  const [isCheck, setIsCheck] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deleteTodo(todo._id);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheck = (e) => {
    setIsCheck(e.target.checked);
  };

  const handleUpdateTodo = () => {
    navigate(`/todo/${todo._id}`);
  };

  return (
    <>
      <li
        className={`flex justify-between items-center shadow-md  px-8 py-4 gap-2 w-[500px] font-montserrat font-medium ${
          isCheck && "line-through"
        }`}
      >
        <input
          className="w-[20px] h-[20px] rounded-xl"
          type="checkbox"
          onChange={handleCheck}
          value={isCheck}
        />
        <div>{description}</div>
        <div className="flex flex-wrap gap-2">
          <button onClick={handleUpdateTodo}>
            <CiEdit className="text-xl text-orange-500" />
          </button>
          <button onClick={handleDelete}>
            <MdDelete className="text-lg text-red-500" />
          </button>
        </div>
      </li>
    </>
  );
};

export default TodoList;
