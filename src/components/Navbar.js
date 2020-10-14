import React from 'react';

export const  Navbar = () => {
    return(
        <div>
            <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
                <div className="navbar-brand">
                    GitHub Search
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Main</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">About</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}