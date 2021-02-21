import React, { Component } from 'react';
import * as api from '../api'

// mapboxgl.accessToken = 'eyJ1IjoiZGFuYmVhdW1vbnQ5NSIsImEiOiJja2xhbWVlaDcwNnd1Mm9zNDRhdG42emtkIn0';

class HomePage extends Component {
    state={
        fighters: [],
        isLoading: true,
        errMsg: ''
    }

    componentDidMount() {
       this.fetchFighters()
    }

        render() {
            const { fighters, isLoading, errMsg } = this.state;
            if (isLoading) return <p>Loading...</p>
              return (
        <div>
            <h2>Welcome to my version of the official UFC website</h2>
            <br/>
            <h3>Upcoming UFC events</h3>
            {fighters.map((fighter) => {
                if (fighter.full_name === 'IsraelAdesanya' ) {
                    return (
                      
                           <p>{fighter.full_name} vs {fighter.next_fight}</p>
                       
                    )
                }
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

export default HomePage;