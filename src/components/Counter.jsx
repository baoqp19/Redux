import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/counterAction";

const Counter = () => {
  // lấy state từ store
  const count = useSelector((state) => {
    console.log(state);
    
    return  state.counter.count + 1;
  });
  // gọi hàm dispatch
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
        //   dispatch({ type: "counter/increment" });
        dispatch(increment())
        }}
      >
        +
      </button>
      <button
        onClick={() => {
        //   dispatch({ type: "counter/decrement" });
        dispatch(decrement())
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
