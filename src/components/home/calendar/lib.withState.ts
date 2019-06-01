/**
 * The previous version of this lib, when we were using useState hook and useDate custom hook
 * Saved for quick comparison
 */

import { useState, Dispatch, SetStateAction } from "react";

interface IUseDate {
  (initialDate: Date): [
    Date,
    Dispatch<SetStateAction<Date>>,
    (() => void),
    (() => void)
  ];
}

export const useDate: IUseDate = initialDate => {
  const [date, setDate] = useState(initialDate);

  const nextMonth = () => {
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
    setDate(newDate);
  };

  const prevMonth = () => {
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
    setDate(newDate);
  };

  return [date, setDate, prevMonth, nextMonth];