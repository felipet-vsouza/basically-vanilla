import React, { Component } from 'react';

class Documentation extends Component {

    constructor() {
        super();

        this.state = {
            title: 'Documentation'
        };
    }

    render() {
        const { title } = this.state;
        return (
            <h1>{title}</h1>
        );
    }
}

export default Documentation;