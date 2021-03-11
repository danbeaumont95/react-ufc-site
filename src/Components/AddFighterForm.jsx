import React, { Component } from 'react';
import * as api from '../api'

class AddFighterForm extends Component {
    state={
        first_name: "",
        surname: "",
        full_name: "",
        weight: "",
        age: 0,
        dob: "",
        champ_status: "",
        next_fight: "",
        img_url: "",
    };

    handleSubmit = (event) => {
        event.preventDefault();
        api.addFighter(this.state).then(({fighter}) => {
            console.log(fighter, 'fighter in handleSubmit');
            this.props.addNewFighter(fighter)
        })
        this.setState({
            first_name: "",
        surname: "",
        full_name: "",
        weight: "",
        age: 0,
        dob: "",
        champ_status: "",
        next_fight: "",
        img_url: "",
        })
    }

    // handleChange = (event) => {
    //     this.setState({[event.target.first_name]: event.target.value, 
    //         [event.target.surname]: event.target.value, 
    //         [event.target.full_name]: event.target.value,
    //         [event.target.weight]: event.target.value,
    //         [event.target.age]: event.target.value,
    //         [event.target.dob]: event.target.value,
    //         [event.target.champ_status]: event.target.value,
    //         [event.target.next_fight]: event.target.value,
    //         [event.target.img_url]: event.target.value,
    //     })
    // }

    handleChange = (event) => {
        // const { value, first_name, surname, full_name, weight, age, dob, champ_status, next_fight, img_url } = event.target;
            const {value, name} = event.target;
        this.setState({
            // [first_name]: value,
            // [surname]: value,
            // [full_name]: value,
            // [weight]: value,
            // [age]: value,
            // [dob]: value,
            // [champ_status]: value,
            // [next_fight]: value,
            // [img_url]: value,
            [name]: value
        })
    }

    

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        First name: 
                        <input type="text" onChange={this.handleChange} value={this.state.first_name.value} name="first_name"  />
                    </label>
                    <label>
                        Surname: 
                        <input type="text" onChange={this.handleChange} value={this.state.surname.value} name="surname" />
                    </label>
                    <label>
                        Full name: 
                        <input type="text" onChange={this.handleChange} value={this.state.full_name.value} name="full_name" />
                    </label>
                    <label>
                        Weight: 
                        <input type="text" onChange={this.handleChange} value={this.state.weight.value} name="weight" />
                    </label>
                    <label>
                        Age: 
                        <input type="number" onChange={this.handleChange} value={this.state.age.value} name="age" />
                    </label>
                    <label>
                        Date of Birth: 
                        <input type="text" onChange={this.handleChange} value={this.state.dob.value} name="dob" />
                    </label>
                    <label>
                        Champ status: 
                        <input type="text" onChange={this.handleChange} value={this.state.champ_status.value} name="champ_status" />
                    </label>
                    <label>
                        Next fight: 
                        <input type="text" onChange={this.handleChange} value={this.state.next_fight.value} name="next_fight" />
                    </label>
                    <label>
                        Image URL: 
                        <input type="text" onChange={this.handleChange} value={this.state.img_url.value} name="img_url" />
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }


}

export default AddFighterForm;