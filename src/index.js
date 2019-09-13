import {
    App
} from './app.js';
import VueApp from './vueApp.js';
import Authors from './app/authors/Authors.vue';
import Documentation from './app/documentation/Documentation.vue';
import Homepage from './app/homepage/Homepage.vue';

function renderApproach() {
    return (Component) => {
        return () => VueApp.get().ViewComponent = Component;
    };
}

document.addEventListener('DOMContentLoaded', () => {
    new App(
            [{
                    name: 'Homepage',
                    href: '/',
                    component: Homepage
                },
                {
                    name: 'Documentation',
                    href: '/docs/',
                    component: Documentation
                },
                {
                    name: 'About the authors',
                    href: '/authors/',
                    component: Authors
                }
            ]
        )
        .initialize(renderApproach());
});