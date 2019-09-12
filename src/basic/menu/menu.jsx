/** @jsx node */

import './menu.css';
import { node, dom } from 'jsx-pragmatic';

export default function render(nodes) {
    return (
        <aside>
            {nodes.forEach(node =>
                <li><a href={node.href}> {node.name} </a></li>
            )}
        </aside>
    ).render(dom());
}