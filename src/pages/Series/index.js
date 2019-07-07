import React from "react";
import sample from "../../sample.json";
import ProgramList from "../../components/ProgramList";

const Series = () => {
  const sampleSeries = sample.entries
    .filter(e => e.programType === "series" && e.releaseYear >= 2010)
    .slice(0, 21)
    .sort((a, b) => {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();

      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
      return 0;
    });

  console.log(sampleSeries);

  return (
    <main>
      <ProgramList programs={sampleSeries} />
    </main>
  );
};

export default Series;
