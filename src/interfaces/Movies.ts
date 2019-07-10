import { IAction } from "./Redux";

export interface IMovie {
  title: string;
  description: string;
  programType: string;
  images: object;
  releaseYear: number;
}

export interface IMoviesProps {
  isLoading: boolean;
  gotError: boolean;
  list: IMovie[];
  setPageTitle: (title: string) => IAction;
  getMovies: () => IAction;
}

export interface IMoviesState {
  isLoading: boolean;
  gotError: boolean;
  list: IMovie[];
}
