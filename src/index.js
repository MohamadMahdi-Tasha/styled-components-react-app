// Codes By Mahdi Tasha
// Importing Part
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import appState from "./store";
import GlobalStylesComponent from "./components/styled/global.styled";

// Variables
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Rendering Whole App Into Root Element
root.render(
    <Provider store={appState}>
        <React.StrictMode>
            <GlobalStylesComponent />
            <App />
        </React.StrictMode>
    </Provider>
);
