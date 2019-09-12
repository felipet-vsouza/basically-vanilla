/** @jsx node */

import './header.css';
import { node, dom } from 'jsx-pragmatic';

export default function render(name) {
    return (
        <header>
            Welcome to {name} app
        </header>
    ).render(dom());
}