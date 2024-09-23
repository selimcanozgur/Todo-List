/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const API = "http://localhost:3000/api/v1/todos";
const Context = createContext();

const ContextProvider = function ({ children }) {
  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        setTodos(data.todos);
      } catch (error) {
        console.log(error);
      }
    };
    getAllData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const datas = {
        description,
      };
      const res = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datas),
      });
      const data = await res.json();
      setTodos((prevTodos) => [...prevTodos, data.newTodo]);
      setDescription("");
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTodo = async (id) => {
    try {
      await fetch(`${API}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Silme başarılı olduğunda todos listesini güncelle
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const updateTodo = async (id, updatedTodo) => {
    try {
      await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTodo),
      });

      const updatedTodos = todos.map((todo) =>
        todo._id === id ? { ...todo, ...updatedTodo } : todo
      );
      setTodos(updatedTodos); // Todos'u güncelle
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Context.Provider
      value={{
        todos,
        setTodos,
        description,
        setDescription,
        handleSubmit,
        deleteTodo,
        updateTodo,
        modal,
        setModal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const useTodo = function () {
  const contextTodo = useContext(Context);
  if (!contextTodo) throw Error("Use todo context undefined");
  return contextTodo;
};

export { ContextProvider, useTodo };
