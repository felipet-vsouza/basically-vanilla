/** @jsx node */

import './menu.css';
import { node } from 'jsx-pragmatic';

export function Menu({ menuNodes }) {
    return (
        <aside>
            {menuNodes.forEach(menuNode =>
                <li>
                    <a href={menuNode.href}>
                        {menuNode.name}
                    </a>
                </li>
            )}
        </aside>
    );
}