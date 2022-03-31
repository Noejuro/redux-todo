
import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore, combineReducers } from "redux";
import { todos } from "./reducers/todo";
import { count } from "./reducers/count"

const reducers = {
    todos,
    count,
}

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, composeWithDevTools());

export default store;