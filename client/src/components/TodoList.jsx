/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useTodo } from "../context/TodoContext";

const TodoList = ({ todo }) => {
  const { description } = todo;
  const { deleteTodo } = useTodo();

  const handleDelete = async () => {
    try {
      await deleteTodo(todo._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <li className="flex justify-between items-center shadow-md  px-8 py-4 gap-2 w-[500px] font-montserrat font-medium ">
        <input className="w-[20px] h-[20px] rounded-xl" type="checkbox" />
        <div>{description}</div>
        <div className="flex flex-wrap gap-2">
          <CiEdit className="text-xl text-orange-500" />
          <button onClick={handleDelete}>
            <MdDelete className="text-lg text-red-500" />
          </button>
        </div>
      </li>
    </>
  );
};

export default TodoList;
