import { IAppointmentList } from "../../components/home/calendar/appointments_provider";

const moment = require("moment");

export const appointments: IAppointmentList = {
  [moment().subtract(2, "days").format("YYYY-MM-DD")]: [
    {
      id: 1,
      hour: "9.30 am",
      title: "Daily brief with the staff",
      done: true,
    },
    {
      id: 2,
      hour: "10.00 am",
      title: "Meeting with Dr.Ford",
      done: true,
    },
    {
      id: 3,
      hour: "11.30 am",
      title: "Meeting team",
      done: true,
    },
    {
      id: 4,
      hour: "1.30 pm",
      title: "Daily visits",
      done: true,
    },
    {
      id: 5,
      hour: "3.45 pm",
      title: "Meeting team",
      done: true,
    },
  ],
  [moment().subtract(1, "day").format("YYYY-MM-DD")]: [
    {
      id: 1,
      hour: "10.00 am",
      title: "Daily brief with the staff",
      done: true,
    },

    {
      id: 2,
      hour: "12.00 am",
      title: "Meeting with Dr.Ford",
      done: true,
    },
    {
      id: 3,
      hour: "12.30 am",
      title: "Meeting team",
      done: false,
    },
  ],
  [moment().format("YYYY-MM-DD")]: [
    {
      id: 1,
      hour: "9.30 am",
      title: "Daily brief with the staff",
      done: true,
    },
    {
      id: 2,
      hour: "10.00 am",
      title: "Meeting with Dr.Ford",
      done: false,
    },
    {
      id: 3,
      hour: "11.30 am",
      title: "Meeting team",
      done: false,
    },
    {
      id: 4,
      hour: "1.30 pm",
      title: "Daily visits",
      done: false,
    },
    {
      id: 5,
      hour: "3.45 pm",
      title: "Meeting team",
      done: false,
    },
  ],
  [moment().add(1, "day").format("YYYY-MM-DD")]: [
    {
      id: 1,
      hour: "10.15 am",
      title: "Meeting with Dr.Ford",
      done: false,
    },
    {
      id: 2,
      hour: "11.30 am",
      title: "Daily visits",
      done: true,
    },
    {
      id: 3,
      hour: "12.00 am",
      title: "Daily brief with the staff",
      done: false,
    },
    {
      id: 4,
      hour: "1.30 pm",
      title: "Meeting team",
      done: false,
    },
    {
      id: 5,
      hour: "2.00 pm",
      title: "Meeting team",
      done: false,
    },
  ],
  [moment().add(2, "days").format("YYYY-MM-DD")]: [
    {
      id: 1,
      hour: "10.00 am",
      title: "Daily brief with the staff",
      done: false,
    },
    {
      id: 3,
      hour: "11.00 am",
      title: "Meeting team",
      done: false,
    },
    {
      id: 4,
      hour: "12.00 pm",
      title: "Meeting with Dr.Ford",
      done: false,
    },
    {
      id: 5,
      hour: "3.00 pm",
      title: "Meeting team",
      done: false,
    },
  ],
};
