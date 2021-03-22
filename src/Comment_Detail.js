import { FlightTakeoffRounded } from '@material-ui/icons';
import React, { Component } from 'react'

export default class Comment_Detail extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <div className="ui container comments">
                    <div className="comment">
                    <a href="/" className="avatar">
                        <img src="https://picsum.photos/300/300" alt="avatar" />
                    </a>
                    <div className="content">
                        <a href="/" className="author">
                        {this.props.name}
                        </a>
                        <div className="metadata">
                        <span className="date">Today at 6:00pm</span>
                        </div>
                        <div className="text">Nice Blog post!</div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
