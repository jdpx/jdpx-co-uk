import React from 'react';
import './index.css';
import App from './App';
import { hydrate, render } from 'react-dom';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('jdpx');
if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
} else {
    render(<App />, rootElement);
}
serviceWorker.register();