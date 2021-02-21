import React, { Component } from 'react';
import * as api from '../api'

class SingleStaff extends Component {
    state={
        staff: {},
        isLoading: true,
        errMsg: ''
    }
    componentDidMount() {
        const { full_name } = this.props;
        this.fetchStaff(full_name)
    }
    render() {
        const { staff, isLoading, errMsg } = this.state;
        if (isLoading) return <p>Loading...</p>
        return (
            <div>
               <p>{staff.full_name}</p>
            </div>
        )
    }
    fetchStaff(full_name) {
        api.getSingleStaff(full_name)
        .then((staff) => {
            this.setState({ staff, isLoading: false })
        })
    }
}

export default SingleStaff;