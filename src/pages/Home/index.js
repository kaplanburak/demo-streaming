import React from "react";
import "./style.scss";
import ProgramType from "../../components/ProgramType";

const Home = () => {
  return (
    <main id="main-home">
      <ProgramType typeName="Series" />
      <ProgramType typeName="Movies" />
    </main>
  );
};

export default Home;
