/** @jsx node */

import { dom, node } from 'jsx-pragmatic';
import { Header } from './header/header.jsx';
import { Menu } from './menu/menu.jsx';
import './basic.css';

function name() {
    return 'VanillaJS Try-Out'
}

export function Basic(router, nodes, renderApproach) {
    return (
        <div id="super-container">
            <Header name={name()} />
            <Menu router={router} menuNodes={nodes} renderApproach={renderApproach} />
            <article id="app-container">
                This is where your app goes
            </article>
        </div>
    ).render(dom());
}