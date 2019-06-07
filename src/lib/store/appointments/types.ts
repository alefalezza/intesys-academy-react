export interface IAppointment {
  id: number;
  hour: string;
  title: string;
  done: boolean;
}

export interface IAppointmentList extends Record<string, IAppointment[]> {}
