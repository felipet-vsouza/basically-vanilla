import React from 'react';
import ReactDOM from 'react-dom';

import {
    App
} from './app.js';
import {
    appContainer
} from './basic/helper/dom.js';
import Homepage from './app/homepage/Homepage.jsx';
import Documentation from './app/documentation/Documentation.jsx';
import Authors from './app/authors/Authors.jsx';

function renderApproach(Component) {
    return () => {
        ReactDOM.render( < Component / > , appContainer());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new App([{
                name: 'Homepage',
                href: '/',
                component: Homepage
            },
            {
                name: 'Documentation',
                href: '/docs',
                component: Documentation
            },
            {
                name: 'Authors',
                href: '/authors',
                component: Authors
            }
        ])
        .initialize(renderApproach);
});