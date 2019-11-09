import React from 'react';
import {Link} from 'react-router-dom';

export const Header = () => (
    <header className="bg-light">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link to="/" className="navbar-brand"><h1>Film Info</h1></Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="navbar-item">
                            <Link to="/search" className="nav-link">Search</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Add new</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
)