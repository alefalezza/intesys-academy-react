import { Reducer } from "redux";
import { GET_APPOINTMENTS } from "./consts";
import { IAppointmentList } from "./types";

const reducer: Reducer<IAppointmentList> = (state = {}, action) => {
  switch (action.type) {
    case GET_APPOINTMENTS:
      return action.payload as IAppointmentList;
    default:
      return state;
  }
};

export default reducer;
