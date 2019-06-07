import { Action } from "redux";

export interface IAction<T> extends Action {
  type: string;
  payload?: T;
  error?: boolean;
}
