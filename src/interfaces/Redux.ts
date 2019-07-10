import { IMoviesState } from "./Movies";
import reducers from "../reducers";

export interface ISeriesReduxState {
  isLoading: boolean;
  gotError: boolean;
  list: object[];
}

export interface IAppReduxState {
  pageTitle: string;
}

export interface IAction {
  type: string;
  payload?: any;
}

export interface IState {
  app: IAppReduxState;
  movies: IMoviesState;
  series: ISeriesReduxState;
}

export type TReduxState = ReturnType<typeof reducers>;

//export type IDispatch = (action: () => IAction) => IAction;
