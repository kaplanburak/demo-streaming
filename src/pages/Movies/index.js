import React from "react";
import ProgramList from "../../components/ProgramList";
import { connect } from "react-redux";
import { getMovies } from "../../store/actions";
import { setPageTitle } from "../../store/actions";

class Movies extends React.Component {
  componentDidMount() {
    const { setPageTitle, getMovies } = this.props;
    setPageTitle("Popular Movies");
    getMovies();
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
  const { list, isLoading, gotError } = state.movies;
  return { list, isLoading, gotError };
};

const mapDispatchToProps = dispatch => {
  return {
    setPageTitle: title => dispatch(setPageTitle(title)),
    getMovies: () => dispatch(getMovies())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
