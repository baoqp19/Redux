import React, { useEffect } from "react";
import Counter from "./components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "./middlewares/fetchTodo";

const App = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  useEffect(() => {
    dispatch(fetchTodo());
  }, []);
  return (
    <div>
      <Counter />
      <h2>TodoList</h2>
      {todoList.map(({ id, title }) => (
        <h3 key={id}>{title}</h3>
      ))}
    </div>
  );
};

export default App;
