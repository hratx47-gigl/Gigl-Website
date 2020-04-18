/*eslint no-useless-constructor: "error"*/
import React from 'react';

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({text: "updated my state (:"});
    }

    render() {
        return (<button onClick={this.onClick}>HELLO FROM SHARED {this.state.text}</button>)
    }
}