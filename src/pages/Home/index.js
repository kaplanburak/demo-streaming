import React from "react";
import { connect } from "react-redux";
import "./style.scss";
import ProgramType from "../../components/ProgramType";
import { setPageTitle } from "../../store/actions";

class Home extends React.Component {
  componentDidMount() {
    this.props.setPageTitle("Popular Titles");
  }

  render() {
    return (
      <main id="main-home">
        <ProgramType typeName="Series" />
        <ProgramType typeName="Movies" />
      </main>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPageTitle: title => dispatch(setPageTitle(title))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
