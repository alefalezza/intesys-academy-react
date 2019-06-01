import React, { useEffect, useState } from "react";

const apiEndpoint = "http://localhost:3000/appointmentList";

export interface IAppointment {
  id: number;
  hour: string;
  title: string;
  done: boolean;
}

export interface IAppointmentList extends Record<string, IAppointment[]> {}

export const AppointmentsContext: React.Context<
  IAppointmentList
> = React.createContext({});

const getAppointments = (): Promise<IAppointmentList> =>
  fetch(apiEndpoint).then(r => r.json());

const AppointmentsProvider: React.FunctionComponent = ({ children }) => {
  const [appointments, setAppointments] = useState({});

  useEffect(() => {
    getAppointments().then(data => setAppointments(data));
  }, []);

  return (
    <AppointmentsContext.Provider value={appointments}>
      {children}
    </AppointmentsContext.Provider>
  );
};

export default AppointmentsProvider;
