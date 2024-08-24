import React, { useEffect } from "react";
import Counter from "./components/Counter";
import { useDispatch } from "react-redux";
import { fetchTodo } from "./middlewares/fetchTodo";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, [])
  return (
   
      <Counter />

  );
};

export default App;
