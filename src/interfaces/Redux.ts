export interface IMoviesReduxState {
  isLoading: boolean;
  gotError: boolean;
  list: object[];
}

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
  movies: IMoviesReduxState;
  series: ISeriesReduxState;
}

export type IDispatch = (action: () => IAction) => IAction;
