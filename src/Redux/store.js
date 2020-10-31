import {combineReducers, createStore} from "redux";
import mainReducer from "./mainReducer";

let reducers = combineReducers({
    main: mainReducer
})

let store = createStore(reducers)

export default store
