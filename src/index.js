import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './components/Home.jsx';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
);