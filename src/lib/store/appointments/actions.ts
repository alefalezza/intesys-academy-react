import { ThunkAction } from "redux-thunk";
import { API_ENDPOINT } from "../../../config/consts";
import { IAction } from "../../../types/action";
import { IStore } from "../../../types/store";
import { GET_APPOINTMENTS } from "./consts";
import { IAppointmentList } from "./types";

export const getAppointments = (): ThunkAction<
  void,
  IStore,
  null,
  IAction<IAppointmentList>
> => dispatch => {
  fetch(API_ENDPOINT)
    .then(r => r.json())
    .then(({ appointmentList }) => {
      dispatch({
        type: GET_APPOINTMENTS,
        payload: appointmentList as IAppointmentList
      });
    });
};
