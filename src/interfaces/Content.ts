import { IMovie, ISeries } from "./index";

export interface IContentState {
  searchTerm: string;
  sortBy: string;
}

export interface IContentProps {
  list: TEntry[];
  isLoading: boolean;
  gotError: boolean;
}

export type TEntry = IMovie | ISeries;
