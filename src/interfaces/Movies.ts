import { IAction } from "./index";

export interface IMoviesProps {
  isLoading: boolean;
  gotError: boolean;
  list: object[];
  setPageTitle: (title: string) => IAction;
  getMovies: () => IAction;
}
