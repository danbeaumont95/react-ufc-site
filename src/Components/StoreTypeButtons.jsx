import React from 'react';
import { Link } from '@reach/router'

const StoreTypeButtons = (types) => {
    return (
        <div>
            <Link to={`/store/${types.types}`}>
            <button>{types.types}</button>
            </Link>
        </div>
    )
}

export default StoreTypeButtons;