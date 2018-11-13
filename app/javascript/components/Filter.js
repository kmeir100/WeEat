import React from 'react';
import Rating from './Rating';
import Toggle from './Toggle';
import DropDown from './DropDown';
import RangeSlider from './Slider';

class Filter extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            filters: {
                cuisine: "All",
                rating: 1,
                maxDeliveryTime: 180,
                tenbis: false,
            },
        };

    }

    setCuisine = (c) => {
        const items = this.state.filters;
        items.cuisine = c;

        this.setState({
            filters: items,
        },() => { console.log(this.state.filters);
            this.props.passFilter(this.state.filters);});
    }

    setRating = (c) => {
        const items = this.state.filters;
        items.rating = c;

        this.setState({
            filters: items,
        },() => { console.log(this.state.filters);
                this.props.passFilter(this.state.filters);});
    }

    setMaxDeliveryTime = (c) => {
        const items = this.state.filters;
        items.maxDeliveryTime = c;

        this.setState({
            filters: items,
        },() => { console.log(this.state.filters);
            this.props.passFilter(this.state.filters);});
    }

    setTenBis = (c) => {
        const items = this.state.filters;
        items.tenbis = c;

        this.setState({
            filters: items,
        },() => { console.log(this.state.filters);
            this.props.passFilter(this.state.filters);});
    }

    render() {
        return (
            <div className="flex-container">
                <div className="filter-item">
                    <div className="headline">Cuisine</div>
                    <DropDown onChangeProp={this.setCuisine}/>
                </div>
                <div className="filter-item">
                    <div className="headline">Rating</div>
                    <Rating onChangeProp={this.setRating}/>
                </div>
                <div className="filter-item">
                    <div className="headline">Maximum delivery time</div>
                    <RangeSlider onChangeProp={this.setMaxDeliveryTime}/>
                </div>
                <div className="filter-item">
                    <div className="headline">10bis</div>
                    <Toggle onChangeProp={this.setTenBis}/>
                </div>
            </div>
        );
    }
}


export default Filter;
