import React from 'react';
import sample from '../sample.json';

const Series = () => {
    const sampleSeries = sample.entries
        .filter(e => e.programType === 'movie' && e.releaseYear >= 2010)
        .slice(0, 21)
        .sort((a, b) => {
            const titleA = a.title.toUpperCase();
            const titleB = b.title.toUpperCase();

            if (titleA < titleB) return -1;
            if (titleA > titleB) return 1;
            return 0;
        });

    console.log(sampleSeries);

    return <h1>Series</h1>;
};

export default Series;