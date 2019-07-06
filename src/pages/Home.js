import React from 'react';
import sample from '../sample.json';

import Header from '../components/Header';

const Home = () => {
    console.log(sample);
    return (
        <main>
            <Header />
            <h1>Home</h1>
        </main>
    );
};

export default Home;