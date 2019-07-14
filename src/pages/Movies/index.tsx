import React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { getMovies, setPageTitle } from "../../actions";
import Content from "../../components/Content";
import { TReduxState, IMoviesProps, IAction } from "../../interfaces";

export class Movies extends React.Component<IMoviesProps, {}> {
  componentDidMount(): void {
    const { setPageTitle, getMovies }: IMoviesProps = this.props;
    setPageTitle("Popular Movies");
    getMovies();
  }

  render(): JSX.Element {
    const { list, isLoading, gotError }: IMoviesProps = this.props;
    return (
      <main>
        <Content list={list} isLoading={isLoading} gotError={gotError} />
      </main>
    );
  }
}

const mapStateToProps = (state: TReduxState) => {
  const { list, isLoading, gotError } = state.movies;
  return { list, isLoading, gotError };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<TReduxState, null, IAction>) => {
  return {
    setPageTitle: (title: string) => dispatch(setPageTitle(title)),
    getMovies: () => dispatch(getMovies())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
