import React from 'react';
import { Link } from '@reach/router'

const StoreButton = () => {
    return (
        <div>
            <Link to={`/store`}>
                <button>Return to all items!</button>
            </Link>
        </div>
    )
}

export default StoreButton