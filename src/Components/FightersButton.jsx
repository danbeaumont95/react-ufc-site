import React from 'react';
import { Link } from '@reach/router'

const FightersButton = () => {
    return (
        <div>
            <Link to="/fighters">
                <button>Back to all Fighters!</button>
            </Link>
        </div>
    )
}

export default FightersButton;