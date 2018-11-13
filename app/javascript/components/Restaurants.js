import React from 'react';
import RestItem from "./RestItem";

class restaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rests: [],
            filters: {},
        };
    }

    render() {
        return (
            <div className="restaurant-list">
                {this.props.restaurants.filter(
                    u =>
                        (this.props.setFilters.cuisine = "All" || u.cuisine === this.props.setFilters.cuisine) &&
                        u.tenbis === this.props.setFilters.tenbis &&
                        u.delivery_time <= this.props.setFilters.maxDeliveryTime &&
                        (u.rating >= this.props.setFilters.rating || u.rating === null)
                ).map(item => {
                    return (
                        <RestItem key={item.id} rest={item} restId={item.id}/>
                    );
                })}
            </div>
        );
    }
}

export default restaurant;
