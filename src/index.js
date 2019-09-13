import { App } from './app.js';
import { Authors } from './app/authors/authors.jsx';
import { Documentation } from './app/documentation/documentation.jsx';
import { Homepage } from './app/homepage/homepage.jsx';
import { appContainer } from './basic/helper/dom.js';

function renderApproach(Component) {
    return () => appContainer().innerHTML = Component();
}

document.addEventListener('DOMContentLoaded', () => {
    new App(
        [
            { name: 'Homepage', href: '/', component: Homepage },
            { name: 'Documentation', href: '/docs/', component: Documentation },
            { name: 'About the authors', href: '/authors/', component: Authors }
        ]
    )
        .initialize(renderApproach);
});