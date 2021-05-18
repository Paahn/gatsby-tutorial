import React from 'react';
import { Link } from 'gatsby';

const Layout = ({ pagetitle }) => {
    return (
        <main>
            <title>{pagetitle}</title>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </nav>
            <h1>{pagetitle}</h1>
        </main>
    )
}

export default L
