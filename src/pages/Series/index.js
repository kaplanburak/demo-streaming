import React from "react";
import ProgramList from "../../components/ProgramList";
import { connect } from "react-redux";
import { getSeries } from "../../store/actions";
import { setPageTitle } from "../../store/actions";

class Series extends React.Component {
  componentDidMount() {
    const { setPageTitle, getSeries } = this.props;
    setPageTitle("Popular Series");
    getSeries();
  }

  render() {
    const { list, isLoading, gotError } = this.props;
    return (
      <main>
        {isLoading ? (
          <p>Loading...</p>
        ) : gotError ? (
          <p>Oops, something went wrong...</p>
        ) : (
          <ProgramList programs={list} />
        )}
      </main>
    );
  }
}

const mapStateToProps = state => {
  const { list, isLoading, gotError } = state.series;
  return { list, isLoading, gotError };
};

const mapDispatchToProps = dispatch => {
  return {
    setPageTitle: title => dispatch(setPageTitle(title)),
    getSeries: () => dispatch(getSeries())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Series);
