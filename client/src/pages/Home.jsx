const HomePage = () => {
  return (
    <div className="flex justify-center mt-24">
      <input
        className="px-4 py-2 w-96 outline-none border"
        placeholder="Add a new task..."
        type="text"
      />
      <button>ADD</button>
    </div>
  );
};

export default HomePage;
