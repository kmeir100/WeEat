import React from 'react';
import axios from "axios";

import plus from '../../assets/images/plus.png';

class AddRestaurant extends React.Component {

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
        document.getElementById("add_rest_form").style.display = "block";
    }

    render() {
        return (
            <button className="add_btn" onClick={this.on}>Add Restaurant</button>
        );
    }
}

export default AddRestaurant;

