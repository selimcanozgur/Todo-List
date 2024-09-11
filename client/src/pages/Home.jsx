const HomePage = () => {
  return (
    <div className="flex justify-center mt-24">
      <input
        className="px-4 py-2 w-96 outline-none border border-orange-400 rounded-lg"
        placeholder="Add a new task..."
        type="text"
      />
      <button className="bg-orange-400 text-white font-semibold px-4 py-2 rounded-lg ml-4">
        ADD
      </button>
    </div>
  );
};

export default HomePage;
