import React from "react";
import sample from "../sample.json";

const Movies = () => {
  const sampleMovies = sample.entries
    .filter(e => e.programType === "movie" && e.releaseYear >= 2010)
    .slice(0, 21)
    .sort((a, b) => {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();

      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
      return 0;
    });

  console.log(sampleMovies);

  return <h1>Movies</h1>;
};

export default Movies;
