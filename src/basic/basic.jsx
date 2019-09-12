/** @jsx node */

import { dom, node } from 'jsx-pragmatic';
import { Header } from './header/header.jsx';
import { Menu } from './menu/menu.jsx';

function name() {
    return 'VanillaJS Try-Out'
}

function nodes() {
    return [
        { name: 'Homepage', href: '/' },
        { name: 'Documentation', href: '/docs/' },
        { name: 'About the authors', href: '/authors/' }
    ]
}

export function App() {
    return (
        <div id="super-container">
            <Header name={name()} />
            <Menu menuNodes={nodes()} />
            <article id="app-container" />
        </div>
    ).render(dom());
}