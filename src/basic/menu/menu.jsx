/** @jsx node */

import './menu.css';
import { node } from 'jsx-pragmatic';
import { appContainer } from './../helper/dom.js';

function registerRoutes(router, menuNodes, renderApproach) {
    menuNodes.forEach(menuNode => register(router, menuNode, renderApproach));
}

function register(router, newNode, renderApproach) {
    router.on(newNode.href, renderApproach(newNode.component));
}

export function Menu({ router, menuNodes, renderApproach }) {
    registerRoutes(router, menuNodes, renderApproach);
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