import React, { Component } from 'react';
import * as api from '../api'
import { Link } from '@reach/router'

class FightersList extends Component {
    state={
        fighters: [],
        isLoading: true,
        errMsg: ''
    }

    componentDidMount() {
        this.fetchFighters()
    }

    render() {
        const { fighters, errMsg, isLoading } = this.state;
        if (isLoading) return <p>Loading...</p>
        return (
            <div className="fighters_list">
                {fighters.map((fighter) => {
                    return (
                        
                        
                        <li key={fighter.full_name}>
                            <Link to={`/fighters/${fighter.full_name}`}>
                            <h4>{fighter.first_name}</h4>
                            <img className="fighter_img" src={fighter.img_url} alt="fighter"></img>
                            </Link>
                        </li>
                       
                    )
                })}
            </div>
        )
    }

    fetchFighters() {
        api.getAllFighters().then((fighters) => {
            this.setState({ fighters, isLoading: false })
        })
    }
}

export default FightersList;