// redux thunk

import { fetchTodos } from "../actions/todoAction";

export const fetchTodo = () =>{ 
    return async (dispatch, getState) => {
        /* xử lý login 
             -- fetch API
             -- Lưu log
             -- Thay đổi state trước khi đẩy lên Reducer,...
             ==> gọi hàm dispatch
             // xem trên redux-thunk
             */
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json();
        dispatch(fetchTodos(data));      
    };
};