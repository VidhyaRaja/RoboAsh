import React, { Component } from 'react'

export default class EventHandlingDemoComponent extends Component {
    state1 = {
        count : 10,
    }

    handleEvent(){
        this.setState({count:this.state1.count + 1});
    }

    render() {
        return (
            <div>
                <button onClick={this.handleEvent.bind(this)}>
                    Click Me
                </button>
                <h1>{this.state1.count}</h1>
            </div>
        )
    }
}
