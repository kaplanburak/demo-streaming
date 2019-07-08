import React from "react";
import { connect } from "react-redux";
import { setPageTitle, getSeries } from "../../actions";
import Content from "../../components/Content";

class Series extends React.Component {
  componentDidMount() {
    const { setPageTitle, getSeries } = this.props;
    setPageTitle("Popular Series");
    getSeries();
  }

  render() {
    const { list, isLoading, gotError } = this.props;
    return <Content list={list} isLoading={isLoading} gotError={gotError} />;
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
