import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { counterReducer } from "./reducers/counterReducer";
import { todoReducer } from "./reducers/todoReducer";
import { thunk } from "redux-thunk";

const initialState = {
    count : 0,
}

const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
})

export const store = createStore(rootReducer,composeWithDevTools(
    applyMiddleware(thunk)
));
console.log(store);

// composeWithDevTools() trong inspect hiện thị phân action.type

// thunk là hàm trả về hàm khác



















