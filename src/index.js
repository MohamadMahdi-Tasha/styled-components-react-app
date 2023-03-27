// Codes By Mahdi Tasha
// Importing Part
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Variables
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Rendering Whole App In Strict Mode Of React Into Root Element
root.render(<React.StrictMode><App /></React.StrictMode>);
