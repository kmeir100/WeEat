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
                cuisine: "All",
                rating: 1,
                maxDeliveryTime: 180,
                tenbis: false,
            },
            restaurantId: 1,
        };

    }

    handleFilterChanged = (filters) => {
        //console.log("filters= " + filters);
        this.setState({
            filters: filters,
        });
    }

    componentDidMount() {
        axios.get('/restaurants')
            .then(response => {
                // handle success
                const posts = response.data.restaurants.map(x => x);
                this.setState({
                    rests: posts,
                });
                //console.log(response);
            })
            .catch(error => {
                // handle error
                console.log(error);
            })
            .then(() => {
                // always executed
            });
    }

    render() {
        return (
            <div className="main-page">
                <Header onFilterChanged={this.handleFilterChanged}/>
                <div className="items">
                    <Restaurants restaurants={this.state.rests} setFilters={this.state.filters}/>
                    <Map className="map">map</Map>
                </div>

                <AddRestForm />
                <AddReviewForm restaurandId={this.state.restaurantId}/>
                <ReviewsOverlay />
            </div>
        );
    }
}

export default MainComponent;
