import React from 'react';
import { Inertia } from '@inertiajs/inertia-react';

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <h1>My App</h1>
            </header>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
