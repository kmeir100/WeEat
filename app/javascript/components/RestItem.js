import React from 'react';
import Cuisine from './Cuisine';
import RestRate from './RestRate';
import tenbis from '../../assets/images/tenbis';
import notenbis from '../../assets/images/notenbis';
import Delivery from './Delivery';
import AddReview from './AddReview';
import GetReviews from './GetReviews';

class RestItem extends React.Component {
  render() {
    const item = this.props.rest;
    //console.log('item= ' + this.props.restId);
    return (
      <div className="container">
        <div className="item a">
          <Cuisine className="cuisine_icon" cuisine={item.cuisine}/>
        </div>
        <div className="item b">
          <div className="name">{item.name}</div>
          <RestRate rate={item.rating}/>
            <GetReviews restaurantId={this.props.restId}/>
        </div>
        <div className="item c">
          <img src={item.tenbis ? tenbis : notenbis}/>
          <Delivery time={item.delivery_time}/>
          <AddReview restaurantId={this.props.restId}/>
        </div>
      </div>
    );
  }
}


export default RestItem;


