import React, { Component } from 'react';
import * as api from '../api'

class Events extends Component {
    state={
        events: [],
        isLoading: true,
        errMsg: ''
    }

    componentDidMount() {
        this.fetchEvents()
    }

    render() {
        const { events, isLoading, errMsg } = this.state;
        if (isLoading) return <p>Loading...</p>
        return (
            <div>
                <h3>Upcoming events!</h3>
                {events.map((events) => {
                    return (
                        <li key={events.event} className="events_list">
                          <p className="event_title">{events.event}</p>  
                       <p>Main event: <br/>{events.main_event}</p>
                       <p>Loction: <br/>{events.location}</p>  
                        </li>
                       
                       
                    )
                   
                })}
            </div>
        )
    }

    fetchEvents() {
        api.getAllEvents()
        .then((events) => {
            this.setState({ events, isLoading: false })
        })
    }
}

export default Events;