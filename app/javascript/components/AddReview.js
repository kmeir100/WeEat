import React from 'react';
import axios from "axios";

import plus from '../../assets/images/plus.png';

class AddReview extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     rests: [],
        //     addRest: {
        //         name: "",
        //         cuisine: "",
        //         tenbis: false,
        //         address: "",
        //         delivery_time: 180,
        //     },
        // };
    }

    on = () => {
        //console.log("on " + this.props.restaurantId);
        document.getElementById('add_review_form').setAttribute('restId', this.props.restaurantId);
        document.getElementById('add_review_form').style.display = "block";
    }

    render() {
        console.log("on " + this.props.restaurantId);
        return (
            <button className="add_review_btn" onClick={this.on}>Add Review</button>
        );
    }
}

export default AddReview;

