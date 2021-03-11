import React, { Component } from 'react';
import * as api from '../api'
import StoreTypeButtons from './StoreTypeButtons';

class Store extends Component {
    state={
        items: [],
        isLoading: true,
        types: []
    };

    componentDidMount() {
        this.fetchAllStoreItems()
        this.fetchAllTypes()
    }
    render() {
        const { items, isLoading, types } = this.state;
        if (isLoading) return <p>Loading...</p>
        return (
            <>
            <h2>Store</h2>
            

            {types.map((type) => {
                return (
                    // <div className="all-store-type-buttons">
                       <li className="store-type-buttons">
                        <StoreTypeButtons types={type.type}/>
                    </li> 
                    // </div>
                    
                )
            })}
        <div className="store-items">
               {items.map((item) => {
                   
                   return (
                       <>
                       <li className="store-item">
                       <img className="item_img" src={item.img_url} alt="sale item" />
                           <h4>{item.item_name}</h4>
                           <p>Price: £{item.price}</p>
                           <p>Description: {item.description}</p>
                           <p>Sizes: {item.sizes}</p>
                           
                       </li>
                       </>
                   )
               })}
                
            </div>
            </>
        )
    }
   fetchAllStoreItems() {
       api.getAllStoreItems().then((items) => {
           this.setState({ items, isLoading: false })
       })
   }

   fetchAllTypes() {
       api.getAllTypes().then((types) => {
           this.setState({ types, isLoading: false })
       })
   }
}

export default Store;