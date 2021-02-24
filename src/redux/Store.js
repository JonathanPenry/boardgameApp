//import reducers that house all of the information
import rootReducer from "./reducers";
//import create store comes up automatically when you export the createStore below
import { createStore } from "redux";

export default createStore(rootReducer);