import React, {Component} from 'react';
import * as api from '../api'
import FightersButton from './FightersButton';

class FightersByWeight extends Component {
    state={
        fighters: [],
        isLoading: true,
    }

    componentDidMount() {
        const { weight } = this.props;
        this.fetchFightersByWeight(weight)
    }

    render() {
        const { isLoading, fighters } = this.state;
        if (isLoading) return <p>Loading...</p>
        return (
            <>
            <div className="fighters_list">
                {fighters.map((fighter) => {
                    return (
                        <li className="fighters_list_items">
                            <p>Full Name: {fighter.first_name} {fighter.surname}</p>
                            <p>Age:{fighter.age}</p> 
                            <p>Champ status: {fighter.champ_status}</p>
                            <p>Date of birth: {fighter.dob}</p>
                            <img src={fighter.img_url} alt="fighter profile" className="fighter_img"/>
                            <p>Next fight: {fighter.next_fight}</p>
                        </li>
                    )
                })}
            </div>
            <FightersButton />
            </>
            
        )
    }
    fetchFightersByWeight(weight) {
        api.getFightersByWeight(weight).then((fighters) => {
            this.setState({ fighters, isLoading: false })
        })
    }
}

export default FightersByWeight;