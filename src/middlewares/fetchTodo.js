// redux thunk

export const fetchTodo = () =>{ 
    return async (dispatch, getState) => {
        /* xử lý login 
             -- fetch API
             -- Lưu log
             -- Thay đổi state trước khi đẩy lên Reducer,... */
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json();
         console.log(data);
        
    }
}