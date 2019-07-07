import React from "react";
import { Redirect } from "react-router-dom";
import "./style.scss";
import placeholder from "../../assets/placeholder.png";

class ProgramType extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
  }

  render() {
    const { typeName } = this.props;

    if (this.state.redirect) return <Redirect to={`/${typeName}`} />;

    return (
      <div id="wrapper" onClick={() => this.setState({ redirect: true })}>
        <div id="card">
          <img src={placeholder} alt={typeName} />
          <span>{typeName.toUpperCase()}</span>
        </div>
        <div id="title">
          <span>Popular {typeName}</span>
        </div>
      </div>
    );
  }
}

export default ProgramType;
