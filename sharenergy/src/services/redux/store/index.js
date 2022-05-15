import { createStore, combineReducers } from "redux";
import listReducer from "./lists/list.reducer";
import counterReducer from './counter/counter.reducer';
import idReducer from "./id/id.reducer";

const rootReducer = combineReducers({
    list: listReducer,
    counter: counterReducer,   
    id: idReducer,
});

const store = createStore(rootReducer);

export default store;