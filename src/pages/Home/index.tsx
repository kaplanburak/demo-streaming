import React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import "./style.scss";
import ProgramType from "../../components/ProgramType";
import { setPageTitle } from "../../actions";
import { TReduxState, IHomeProps, IAction } from "../../interfaces";

class Home extends React.Component<IHomeProps, {}> {
  componentDidMount(): void {
    this.props.setPageTitle("Popular Titles");
  }

  render(): JSX.Element {
    return (
      <main id="main-home">
        <ProgramType typeName="Series" />
        <ProgramType typeName="Movies" />
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<TReduxState, null, IAction>) => {
  return {
    setPageTitle: (title: string) => dispatch(setPageTitle(title))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
