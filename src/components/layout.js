import React from 'react';
import { Link } from 'gatsby';
import { container } from './layout.module.css';

const Layout = ({ pagetitle, children }) => {
    return (
        <main className={container}>
            <title>{pagetitle}</title>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </nav>
            <h1>{pagetitle}</h1>
            {children}
        </main>
    )
}

export default Layout;
