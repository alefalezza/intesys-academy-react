import { Reducer } from "react";

export interface Action {
  type: "SET_DATE" | "NEXT_MONTH" | "PREV_MONTH";
  payload?: Date;
}

export const dateReducer: Reducer<Date, Action> = (state, action) => {
  switch (action.type) {
    case "SET_DATE":
      return action.payload || state;
    case "NEXT_MONTH":
      return nextMonth(state);
    case "PREV_MONTH":
      return prevMonth(state);
  }
  return state;
};

const nextMonth = (date: Date) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  const newDate = new Date();
  newDate.setDate(1);
  if (month == 11) {
    newDate.setMonth(0);
    newDate.setFullYear(year + 1);
  } else {
    newDate.setMonth(month + 1);
    newDate.setFullYear(year);
  }
  return newDate;
};

const prevMonth = (date: Date) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  const newDate = new Date();
  newDate.setDate(1);
  if (month == 0) {
    newDate.setMonth(11);
    newDate.setFullYear(year - 1);
  } else {
    newDate.setMonth(month - 1);
    newDate.setFullYear(year);
  }
  return newDate;
};
