/** @jsx node */

import './menu.css';
import { node } from 'jsx-pragmatic';
import { appContainer } from './../helper/dom.js';

function registerRoutes(router, menuNodes) {
    menuNodes.forEach(menuNode => register(router, menuNode));
}

function register(router, newNode) {
    router.on(newNode.href, () => appContainer().innerHTML = newNode.component());
}

export function Menu({ router, menuNodes }) {
    registerRoutes(router, menuNodes);
    return (
        <aside>
            {
                menuNodes.map(menuNode =>
                    <li>
                        <a href={menuNode.href} data-navigo>
                            {menuNode.name}
                        </a>
                    </li>
                )
            }
        </aside>
    );
}