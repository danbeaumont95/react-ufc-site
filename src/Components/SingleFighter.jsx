import React, { Component } from 'react';
import * as api from '../api'

class SingleFighter extends Component {
    state={
        fighter: {},
        isLoading: true,
        errMsg: ''
    }

    componentDidMount() {
        const {full_name} = this.props;
        this.fetchPerson(full_name)
    }

    render() {
        const { fighter, isLoading, errMsg } = this.state;
        if (isLoading) return <p>Loading...</p>
        return (
            <div>
               <p>{fighter.full_name}</p> 
            </div>
        )
    }

    fetchPerson(full_name) {
        api.getSingleFighter(full_name).then((fighter) => {
            this.setState({ fighter, isLoading: false })
        })
    }
}

export default SingleFighter;