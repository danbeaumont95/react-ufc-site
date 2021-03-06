import React, { Component } from 'react';
import * as api from '../api'

class SingleFighter extends Component {
state={
fighter: {},
isLoading: true,
errMsg: ''
}

componentDidMount() {
const {full_name} = this.props;
this.fetchPerson(full_name)
}

render() {
const { fighter, isLoading, errMsg } = this.state;
if (isLoading) return <p>Loading...</p>
return (
<div>
    <p>{fighter.age}</p>
    <p>{fighter.champ_status}</p>
<p>{fighter.first_name}</p> 
<p>{fighter.full_name}</p>
<img src={fighter.img_url} alt="profilepic" className="fighter_img"></img>
<p>{fighter.next_fight}</p>
<p>{fighter.surname}</p>
<p>{fighter.weight}</p>
</div>
)
}

fetchPerson(full_name) {
api.getSingleFighter(full_name).then((fighter) => {
this.setState({ fighter, isLoading: false })
})
}
}

export default SingleFighter;