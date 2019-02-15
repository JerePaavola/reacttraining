import React, { Component } from 'react';

export default class Title extends Component {
    render() {
        const { title, className } = this.props;

        return (
            <h1 className={className}>{title}</h1>
        );
    }
}