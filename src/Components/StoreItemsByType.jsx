import React, { Component } from 'react';
import * as api from '../api'
import StoreButton from './StoreButton';

class StoreItemsByType extends Component {
    state={
        items: [],
        isLoading: true
    };
    componentDidMount() {
        const { type } = this.props;
        this.fetchItemsByType(type)
    }
    render() {
        const { items, isLoading } = this.state;
        if (isLoading) return <p>Loading...</p>
        return (
            <>
            <h2>{this.props.type}</h2>
            <div className="store_items_by_type_list">
                {items.map((item) => {
                     console.log(item);
                    return (
                        <li className="store_item_by_type">
                            <img className="item_img" src={item.img_url} alt="sale item" />
                            <h4>{item.item_name}</h4>
                           <p>Price: £{item.price}</p>
                           <p>Description: {item.description}</p>
                           <p>Sizes: {item.sizes}</p>
                           
                        </li>
                    )
                })}
                
            </div>
          
            <StoreButton />
            </>
        )
    }
    fetchItemsByType(type) {
        api.getItemsByType(type).then((items) => {
            this.setState({ items, isLoading: false })
        })
    }
}

export default StoreItemsByType;