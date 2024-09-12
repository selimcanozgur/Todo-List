import { useTodo } from "../context/TodoContext";

const Form = () => {
  const { description, setDescription, handleSubmit } = useTodo();

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="px-4 py-2 w-96 outline-none border border-orange-400 rounded-lg "
        placeholder="Add a new task..."
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className="bg-orange-400 text-white font-semibold px-4 py-2 rounded-lg ml-4">
        ADD
      </button>
    </form>
  );
};

export default Form;
