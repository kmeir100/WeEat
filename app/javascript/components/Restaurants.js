import React from 'react';
import RestItem from "./RestItem";

class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rests: [],
      filters: {},
    };
  }

  render() {
    //console.log("filters= " + this.props.filters.cuisine);
    return (
      <div className="restaurant-list">
        {this.props.restaurants.filter(
          u =>
            (this.props.filters.cuisine === "All" || u.cuisine.includes(this.props.filters.cuisine)) &&
            u.tenbis === this.props.filters.tenbis &&
            u.delivery_time <= this.props.filters.maxDeliveryTime &&
            (u.rating >= this.props.filters.rating || u.rating === null)
        ).map(item => {
          return (
            <RestItem key={item.id} restaurant={item}/>
          );
        })}
      </div>
    );
  }
}

export default Restaurant;
