import {createStore}  from "redux";
import { rootReducer } from "../reducer/rootReducer";

const mainStore = createStore(rootReducer);
export default mainStore;