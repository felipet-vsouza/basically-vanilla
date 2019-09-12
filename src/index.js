import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './basic/basic.jsx';
import ReactApp from './app/ReactApp.jsx';

document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(App());
    ReactDOM.render(<ReactApp />, document.getElementById('app-container'));
});