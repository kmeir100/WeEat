import React from 'react';

class Cuisine extends React.Component {

    constructor(props) {
        super(props);
        this.letters = {
            rests: [],
        };
    }
    mapCuisineToLetter() {
        //a = burger
        //b = coffee
        //c = sea food
        //d = asian
        //e = cakes
        //d
    }

    render() {
        return (
            <div className="cuisine-icon"> {this.props.cuisine.charAt(0)}</div>
        );
    }
}


export default Cuisine;


