import { IMoviesState } from "./Movies";
import reducers from "../reducers";

export interface ISeriesReduxState {
  isLoading: boolean;
  gotError: boolean;
  list: object[];
}

export interface IAppState {
  pageTitle?: string;
}

export interface IAction {
  type: string;
  payload?: any;
}

export interface IState {
  app: IAppState;
  movies: IMoviesState;
  series: ISeriesReduxState;
}

export type TReduxState = ReturnType<typeof reducers>;
