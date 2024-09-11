/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

const ContextProvider = function ({ children }) {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/v1/todos");
        const data = await res.json();
        setTodo(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllData();
  }, []);

  return <Context.Provider value={{ todos }}>{children}</Context.Provider>;
};

const useTodo = function () {
  const contextTodo = useContext(Context);
  if (!contextTodo) throw Error("Use todo context undefined");
  return contextTodo;
};

export { ContextProvider, useTodo };
