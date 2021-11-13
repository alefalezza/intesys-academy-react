export type IDay = {
  num: number | null;
  isToday: boolean;
  fullDate?: Date;
};

export class CalendarTableData {
  public table: IDay[][];
  public year: number;
  public month: number;
  private firstDay: number;
  private numDaysInMonth: number;
  private days: IDay[];

  constructor(date: Date) {
    this.year = date.getFullYear();
    this.month = date.getMonth();
    this.firstDay = this.getFirstDay(this.year, this.month);
    this.numDaysInMonth = this.daysInMonth(this.year, this.month);
    this.days = this.fillDays(this.firstDay, this.numDaysInMonth);
    this.table = this.fillTable(this.days);
  }

  private daysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
  }

  private getFirstDay(year: number, month: number): number {
    const firstDay = new Date();
    firstDay.setFullYear(year);
    firstDay.setMonth(month);
    firstDay.setDate(1);
    return firstDay.getDay();
  }

  private fillDays(startFrom: number, numberOfDays: number): IDay[] {
    const days = [];
    let x = 0;
    while (x < startFrom) {
      days.push(this.newDay(null));
      x++;
    }
    x = 0;
    while (x < numberOfDays) {
      days.push(this.newDay(x + 1));
      x++;
    }
    while (days.length % 7) {
      days.push(this.newDay(null));
    }
    return days;
  }

  private newDay(num: number | null): IDay {
    if (num === null) {
      return {
        num,
        isToday: false
      };
    }
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    const isToday = this.year === year && this.month === month && num === day;
    const fullDate = new Date();
    fullDate.setFullYear(this.year);
    fullDate.setMonth(this.month);
    fullDate.setDate(num);
    return {
      num,
      isToday,
      fullDate
    };
  }

  private fillTable(days: IDay[]): IDay[][] {
    const table = [];
    let x = 0;
    while (x < days.length) {
      const week: IDay[] = days.slice(x, x + 7);
      table.push(week);
      x = x + 7;
    }
    return table;
  }
}
