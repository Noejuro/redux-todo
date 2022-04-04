import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

// Reducers
import { todos } from "./reducers/todo";
import { count } from "./reducers/count"
import { pokemon } from "./reducers/pokemon";

const reducers = {
    todos,
    count,
    pokemon
}

const rootReducer = combineReducers(reducers);
const store = createStore( rootReducer, composeWithDevTools(applyMiddleware(thunk)) );

export default store;