import React from 'react';

class Cuisine extends React.Component {

    render() {
        return (
            <div className="cuisine-icon"> {this.props.cuisine.charAt(0)} </div>
        );
    }
}


export default Cuisine;


