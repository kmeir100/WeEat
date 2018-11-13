import React from 'react';
import delivery from '../../assets/images/delivery';

class Delivery extends React.Component {

    render() {
        return (
            <div className="delivery">
                <img className="cuisine-icon" src={delivery}/>
                <div>{this.props.time} m</div>
            </div>

        );
    }
}


export default Delivery;
