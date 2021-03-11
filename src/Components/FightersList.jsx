import React, { Component } from 'react';
import * as api from '../api'
import { Link } from '@reach/router'
import WeightButtons from './WeightButtons';
import AddFighterForm from './AddFighterForm';


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
            <>
        <div className="fighters_list">
            {weights.map((weights) => {
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
        <AddFighterForm addNewFighter={this.addNewFighter}/>
        </>
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
  addNewFighter(newFighter) {
    this.setState((currentState) => {
        return {
            fighters: [newFighter, ...currentState.fighters]
        }
    })
  }
}

export default FightersList;