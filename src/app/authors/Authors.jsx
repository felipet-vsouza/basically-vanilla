import React, { Component } from 'react';

class Authors extends Component {

    constructor() {
        super();

        this.state = {
            title: 'Authors'
        };
    }

    render() {
        const { title } = this.state;
        return (
            <h1>{title}</h1>
        );
    }
}

export default Authors;