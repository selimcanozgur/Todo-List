import { useNavigate, useParams } from "react-router-dom";
import { useTodo } from "../context/TodoContext";

const UpdatePage = () => {
  const { description, setDescription, updateTodo } = useTodo();
  const params = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedTodo = {
      description: description,
    };

    if (!description) {
      alert("Fill in the empty field.");
      return;
    }

    await updateTodo(params.id, updatedTodo);
    setDescription("");
    navigate("/home");
  };

  return (
    <div className="mt-20">
      <h1 className="text-center text-green-500 text-3xl font-poppins  mb-12">
        Update Page
      </h1>
      <form
        className="bg-slate-100 w-96 h-56 mx-auto rounded-xl"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-6 items-center">
          <input
            className="bg-slate-200 w-56 rounded-lg focus:outline-none px-4 py-2 h-10 mt-12"
            value={description}
            type="text"
            placeholder="Update todo..."
            onChange={(e) => setDescription(e.target.value)}
          />

          <button className="bg-green-300 text-slate-500 font-semibold rounded-lg w-32 h-10">
            Todo Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePage;
