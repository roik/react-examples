import React from 'react';

// Using the React.createClass() factory
export const Button = React.createClass({

    render() {
        const { label } = this.props;
        return {
            type: 'button',
            props: {
                label: this.props.label
            }
        }
    }
});


