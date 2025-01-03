import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './components/Home.jsx';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
);