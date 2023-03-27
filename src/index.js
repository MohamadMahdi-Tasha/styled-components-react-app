// Codes By Mahdi Tasha
// Importing Part
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import appState from "./store";
import GlobalStylesComponent from "./components/styled/global.styled";
import { ThemeProvider } from "styled-components";

// Variables
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Rendering Whole App Into Root Element
root.render(
    <Provider store={appState}>
        <React.StrictMode>
            <ThemeProvider theme={{
                colors: {
                    slate900: `#0f172a`,
                }
            }}>
                <GlobalStylesComponent />
                <App />
            </ThemeProvider>
        </React.StrictMode>
    </Provider>
);
