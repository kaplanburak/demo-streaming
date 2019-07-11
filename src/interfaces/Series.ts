import { IAction } from "./Redux";

export interface ISeries {
  title: string;
  description: string;
  programType: string;
  images: object;
  releaseYear: number;
}

export interface ISeriesProps {
  isLoading: boolean;
  gotError: boolean;
  list: ISeries[];
  setPageTitle: (title: string) => IAction;
  getSeries: () => IAction;
}

export interface ISeriesState {
  isLoading: boolean;
  gotError: boolean;
  list: ISeries[];
}
