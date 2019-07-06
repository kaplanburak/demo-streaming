import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Movies from './pages/Movies';
import Series from './pages/Series';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/movies" component={Movies} />
                <Route exact path="/series" component={Series} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;