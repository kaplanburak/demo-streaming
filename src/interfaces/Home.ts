import { IAction } from "./Redux";

export interface IHomeProps {
  setPageTitle: (title: string) => IAction;
}
