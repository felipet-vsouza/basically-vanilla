import Navigo from 'navigo';
import { Basic } from './basic/basic.jsx';
import { body } from './basic/helper/dom.js';

export class App {

    constructor(nodes) {
        this.router = new Navigo();
        this.nodes = nodes;
    }

    initialize(renderApproach) {
        body().appendChild(Basic(this.router, this.nodes, renderApproach))
        this.router.updatePageLinks();
        this.router.resolve();
    }
}