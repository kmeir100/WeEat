import React from 'react';
import axios from "axios";

import plus from '../../assets/images/plus.png';

class GetReviews extends React.Component {

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

    on() {
        document.getElementById("get_all_review").style.display = "block";
    }

    render() {
        return (
            <button className="show_reviews" onClick={this.on}>See all reviews</button>
        );
    }
}

export default GetReviews;

