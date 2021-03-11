import React from 'react';
import Nate from '../Images/404-img.jpg'

const Page404 = () => {
    return (
    <div>
        <h2>Error 404</h2>
        <h4>Oh so you're a hacker now?</h4>
        <h4>This page does not exist, please go back to an actual page</h4>
        <img src={Nate} alt="404"/>
    </div>
    )
}

export default Page404;