import React, { Component } from 'react';
import * as api from '../api'
import { Link } from '@reach/router'
import WeightButtons from './WeightButtons';
import '../'

class FightersList extends Component {
    state={
        fighters: [],
        isLoading: true,
        weights: []
    }
    componentDidMount() {
        this.fetchFighters();
        this.fetchWeights()
    }
    render() {
        const { fighters, isLoading, weights } = this.state;
        if (isLoading) return <p>Loading...</p> 
        return (
        <div className="fighters_list">
            {weights.map((weights) => {
                console.log(weights, 'weights in FL');
                return (
                    <li>
                        <WeightButtons weights={weights.weights}/>
                        {/* <button>{weights.weights}</button> */}
                    </li>
                )
            })}
            {fighters.map((fighter) => {
                return (
                    <li className="fighters_list_items" key={fighter.full_name}>
                        <Link to={`${fighter.full_name}`}>
                        <h4>{fighter.first_name} {fighter.surname}</h4>
                        </Link>
                        <h5>Weight: {fighter.weight}</h5>
                        <h5>Next fight: {fighter.next_fight}</h5>
                        <img className="fighter_img" src={fighter.img_url} alt="fighter"></img>
                        
                        
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

  fetchWeights() {
      api.getAllWeights().then((weights) => {
          this.setState({ weights, isLoading: false })
      })
  }
}

export default FightersList;