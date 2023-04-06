import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Welcome } from 'src/components/Welcome';
import { Partfields } from 'src/components/Partfields';

import logo from './images/2-logo.png';
import './styles.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Welcome />,
    },
    {
        path: '/partfields',
        element: <Partfields />,
    },
]);

export function App() {
    return (
        <div className="container">
            <div className="header">
                <div className="logoWrapper">
                    <img src={logo} className="logo" />
                </div>
            </div>

            <div className="body">
                <RouterProvider router={router} />
            </div>
        </div>
    );
}
