import React, { useEffect, useState } from "react";
import { API_ENDPOINT } from "../../../config/consts";

export interface IAppointment {
  id: number;
  hour: string;
  title: string;
  done: boolean;
}

export interface IAppointmentList extends Record<string, IAppointment[]> {}

interface IAppointmentListApi {
  appointmentList: IAppointmentList;
}

export const AppointmentsContext: React.Context<
  IAppointmentList
> = React.createContext({});

const getAppointments = (): Promise<IAppointmentListApi> =>
  fetch(API_ENDPOINT).then(r => r.json());

const AppointmentsProvider: React.FunctionComponent = ({ children }) => {
  const [appointments, setAppointments] = useState({} as IAppointmentList);

  useEffect(() => {
    getAppointments().then(({ appointmentList }) =>
      setAppointments(appointmentList as IAppointmentList)
    );
  }, []);

  return (
    <AppointmentsContext.Provider value={appointments}>
      {children}
    </AppointmentsContext.Provider>
  );
};

export default AppointmentsProvider;
