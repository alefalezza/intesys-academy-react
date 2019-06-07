import { combineReducers } from "redux";
import { IStore } from "../../types/store";
import init from "./init";

const reducers = combineReducers<IStore>({});

export default init(reducers);
