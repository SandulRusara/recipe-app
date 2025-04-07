import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>  {/* Wrap the entire app with BrowserRouter */}
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

// Optionally measure performance
reportWebVitals();
