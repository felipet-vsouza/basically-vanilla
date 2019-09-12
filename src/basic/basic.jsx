/** @jsx node */

import Header from './header/header.jsx';
import Menu from './menu/menu.jsx';
import { node, dom } from 'jsx-pragmatic';

export default function render(nodes) {
    return (
        <div id="super-container">
            <Header />
            <Menu />
            <article id="app-container" />
        </div>
    ).render(dom());
}