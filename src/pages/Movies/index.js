import React from "react";
import { connect } from "react-redux";
import { setPageTitle, getMovies } from "../../actions";
import Content from "../../components/Content";

class Movies extends React.Component {
  componentDidMount() {
    const { setPageTitle, getMovies } = this.props;
    setPageTitle("Popular Movies");
    getMovies();
  }

  render() {
    const { list, isLoading, gotError } = this.props;
    return <Content list={list} isLoading={isLoading} gotError={gotError} />;
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
