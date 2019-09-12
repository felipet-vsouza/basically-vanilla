/** @jsx node */

import './header.css';
import { node } from 'jsx-pragmatic';

export function Header({ name }) {
    return (
        <header>
            Welcome to {name} app
        </header>
    );
}