import React from 'react';
import { createRoot } from 'react-dom/client';
import HomeGamesIntro from './intro';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <HomeGamesIntro />
    </React.StrictMode>
);

