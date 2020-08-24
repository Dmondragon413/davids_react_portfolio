import React, { Component } from "react";
import moment from 'moment';


export default class DateTime extends Component {
    constructor() {
        super();
        
        this.state = {
            currentTime: moment().format('MMMM Do YYYY, h:mm:ss a')

        }
    }

    componentDidMount() {            // LifeCycle Methods
        this.liveTime = setInterval(() => {
            console.log('mounted & updating every second')

            this.setState({ currentTime: moment().format('MMMM Do YYYY, h:mm:ss a')})
        }, 1000 )
    }

    render() {
        return(
            <div>
                {this.state.currentTime}
            </div>
        )
    }
}