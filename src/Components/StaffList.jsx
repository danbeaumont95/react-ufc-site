import React, { Component } from 'react';
import * as api from '../api'
import { Link } from '@reach/router'

class StaffList extends Component {
    state={
        staff: [],
        isLoading: true,
        errMsg: ''
    }
    componentDidMount() {
        this.fetchStaff()
    }

    render() {
        const { staff, isLoading, errMsg } = this.state;
        if (isLoading) return <p>Loading...</p>
        return (
            <div className="staff_list">
                {staff.map((staff) => {
                    return (
                        <li key={staff.full_name}>
                            <Link to={`/staff/${staff.full_name}`}>
                            <h4>{staff.first_name}</h4>
                            <img className="staff_img" src={staff.img_url} alt="staff member"/>
                            </Link>
                        </li>
                    )
                })}
            </div>
        )
    }

    fetchStaff() {
        api.getAllStaff().then((staff) => {
            this.setState({ staff, isLoading: false })
        })
    }
}

export default StaffList;