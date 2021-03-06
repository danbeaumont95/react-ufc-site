import React from 'react';
import {Link} from '@reach/router'

const WeightButtons = (weights) => {
    return (
        <div>
            <Link to={`/fighters/weight/${weights.weights}`}>
            <button>{weights.weights}</button>
            </Link>
            
        </div>
    )
}

export default WeightButtons;