import React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { getSeries, setPageTitle } from "../../actions";
import Content from "../../components/Content";
import { TReduxState, ISeriesProps, IAction } from "../../interfaces";

class Series extends React.Component<ISeriesProps, {}> {
  componentDidMount(): void {
    const { setPageTitle, getSeries }: ISeriesProps = this.props;
    setPageTitle("Popular Series");
    getSeries();
  }

  render(): JSX.Element {
    const { list, isLoading, gotError }: ISeriesProps = this.props;
    return (
      <main>
        <Content list={list} isLoading={isLoading} gotError={gotError} />
      </main>
    );
  }
}

const mapStateToProps = (state: TReduxState) => {
  const { list, isLoading, gotError } = state.series;
  return { list, isLoading, gotError };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<TReduxState, null, IAction>) => {
  return {
    setPageTitle: (title: string) => dispatch(setPageTitle(title)),
    getSeries: () => dispatch(getSeries())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Series);
