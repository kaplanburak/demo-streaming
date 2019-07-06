import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import Button from '../Button';

const Header = () => {
    return (
        <header>
            <nav>
                <div>
                    <h1>
                        <Link to="/" className="link-white">DEMO Streaming</Link>
                    </h1>
                </div>
                <div>
                    <span>Log in</span>
                    <Button innerText="Start your free trial" />
                </div>
            </nav>
            <div id="page-title">
                <h2>Popular Titles</h2>
            </div>
        </header>
    );
};

export default Header;