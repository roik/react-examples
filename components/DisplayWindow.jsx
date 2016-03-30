import React from 'react';
import Button from './base/Button.jsx'

export const DisplayWindow = React.createClass({

    getAction(){
        console.log('pressed button')
    },
    render() {
        
        return {
            <Div>
                <Button label="new-button"></Button>
            </Div>
        }
    }
});