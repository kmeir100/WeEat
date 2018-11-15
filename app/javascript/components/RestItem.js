import React from 'react';
import Cuisine from './Cuisine';
import RestRate from './RestRate';
import Delivery from './Delivery';
import AddReview from './AddReview';
import GetReviews from './GetReviews';

import tenbis from '../../assets/images/tenbis';
import notenbis from '../../assets/images/notenbis';

class RestItem extends React.Component {
  render() {
    const item = this.props.restaurant;
    return (
      <div className="container">
        <div className="item cuisine">
          <Cuisine className="cuisine_icon" cuisine={item.cuisine}/>
        </div>
        <div className="item name-rating">
          <div className="name">{item.name}</div>
          <RestRate rate={item.rating}/>
          <GetReviews restaurantId={item.id}/>
        </div>
        <div className="item tenbis">
          <img className="tenbis-img" src={item.tenbis ? tenbis : notenbis}/>
          <Delivery time={item.delivery_time}/>
          <AddReview restaurantId={item.id} showtoggle={this.props.showtoggle}/>
        </div>
      </div>
    );
  }
}

export default RestItem;
