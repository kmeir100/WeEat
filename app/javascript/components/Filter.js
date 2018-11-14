import React from 'react';
import RatingFilter from './RatingFilter';
import TenbisFilter from './TenbisFilter';
import CuisineFilter from './CuisineFilter';
import DeliveryTimeFilter from './DeliveryTimeFilter';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        cuisine: 'All',
        rating: 1,
        maxDeliveryTime: 180,
        tenbis: false,
      },
    };
  }

  updateFilters = (value, type) => {
    const items = this.state.filters;
    switch (type) {
      case 'cuisine':
        items.cuisine = value;
        break;
      case 'rating':
        items.rating = value;
        break;
      case 'delivery_time':
        items.maxDeliveryTime = value;
        break;
      case 'tenbis':
        items.tenbis = value;
        break;
      default:
        return;
    }

    this.setState({
      filters: items,
    }, () => {
      //console.log(this.state.filters);
      this.props.onFilterChanged(this.state.filters);
    });
  }

  render() {
    return (
      <div className="flex-container">
        <div className="filter-item">
          <div className="headline">Cuisine</div>
          <CuisineFilter onChange={this.updateFilters}/>
        </div>
        <div className="filter-item">
          <div className="headline">Rating</div>
          <RatingFilter onChange={this.updateFilters}/>
        </div>
        <div className="filter-item">
          <div className="headline">Maximum delivery time</div>
          <DeliveryTimeFilter onChange={this.updateFilters}/>
        </div>
        <div className="filter-item">
          <div className="headline">10bis</div>
          <TenbisFilter onChange={this.updateFilters}/>
        </div>
      </div>
    );
  }
}

export default Filter;
