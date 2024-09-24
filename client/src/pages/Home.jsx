import Todo from "../components/Todo";
import Form from "../components/Form";

const HomePage = () => {
  return (
    <div className="flex items-center flex-col mt-12 w-full">
      <Form />
      <Todo />
    </div>
  );
};

export default HomePage;
