import React, { Component } from 'react';

class Homepage extends Component {

    constructor() {
        super();

        this.state = {
            title: 'Homepage'
        };
    }

    render() {
        const { title } = this.state;
        return (
            <h1>{title}</h1>
        );
    }
}

export default Homepage;