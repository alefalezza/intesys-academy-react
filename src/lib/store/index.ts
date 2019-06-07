import { combineReducers } from "redux";
import { IStore } from "../../types/store";
import init from "./init";

import appointments from "./appointments/reducer";

const reducers = combineReducers<IStore>({
  appointments
});

export default init(reducers);
