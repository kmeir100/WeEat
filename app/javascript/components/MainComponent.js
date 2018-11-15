import React from 'react';
import Restaurants from './Restaurants';
import Map from './Map';
import Header from './Header';
import axios from 'axios';
import AddRestForm from './AddRestForm';
import AddReviewForm from './AddReviewForm';
import ReviewsOverlay from './ReviewsOverlay';


class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rests: [],
      filters: {
        cuisine: 'All',
        rating: 1,
        maxDeliveryTime: 180,
        tenbis: false,
      },
      restForm: {
        showtoggle: false,
      },
      reviewForm: {
        restaurantId: 1,
        showtoggle: false,
      }
    };
  }

  handleFilterChanged = (filters) => {
    this.setState({
      filters: filters,
    });
  }

  componentDidMount() {
    axios.get('/restaurants')
      .then(response => {
        // handle success
        const posts = response.data.restaurants;
        this.setState({
          rests: posts,
        });
        // console.log(response);
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }

  show = (type, toggle, id)=> {
    switch (type) {
      case 'restaurant':
        this.setState({
          restForm: {
            showtoggle: toggle,
          },
        });
        break;
      case 'review':
        this.setState({
          reviewForm: {
            restaurantId: id,
            showtoggle: toggle,
          },
        });
        break;
      default:
        return;
    }
  }

  render() {
    return (
      <div className="main-page">
        <Header onFilterChanged={this.handleFilterChanged} showtoggle={this.show}/>
        <div className="items">
          <Restaurants restaurants={this.state.rests} filters={this.state.filters} showtoggle={this.show}/>
          <Map className="map" >map</Map>
        </div>

        <AddRestForm isRestFormDisplayed={this.state.restForm.showtoggle} changeState={this.show}/>
        <AddReviewForm changeState={this.show} isReviewFormDisplayed={this.state.reviewForm.showtoggle} restaurandId={this.state.reviewForm.restaurantId}/>
        <ReviewsOverlay/>
      </div>
    );
  }
}

export default MainComponent;
