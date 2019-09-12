import React, { Component } from 'react';

class ReactApp extends Component {
    constructor() {
        super();

        this.state = {
            title: 'Hi! I\'m a React App :D'
        };
    }

    render() {
        const { title } = this.state;
        return (
            <div>
                <h1>{title}</h1>
            </div>
        );
    }
}

export default ReactApp;