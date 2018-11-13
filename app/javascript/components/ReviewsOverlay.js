import React from 'react';
import axios from "axios";

class GetReviews extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            restId: 1,
            reviews: {
                name: "",
                description: "",
                rate: 1,
            },
        };
    }

    addRestaurant = (e) => {
        const id = document.getElementById("add_review_form").getAttribute('restId');
        console.log("data= " + this.state.reviews.name + " " + this.state.reviews.description + " " + this.state.reviews.rate);
        axios.post(`/restaurants/`+id+'/reviews', {
            name: this.state.reviews.name,
            description: this.state.reviews.description,
            rate: this.state.reviews.rate,
        })
            .then(response => {
                // handle success
                const status = response.status;
                // this.setState({
                //     rests: posts,
                // });
                //console.log(response);
                this.off();
            })
            .catch(error => {
                // handle error
                console.log(error);
            })
            .then(() => {
                // always executed
            });
    }

    handleChange = (e) => {
        console.log("e name= " + e.target.value);
        const items = this.state.reviews;

        switch (e.target.name) {
            case 'name':
                items.name = e.target.value;
                break;
            case 'description':
                items.description = e.target.value;
                break;
            case 'rate':
                items.rate = e.target.value;
                break;
            default:
                return;
        }

        this.setState({reviews: items});
    }


    off() {
        document.getElementById("get_all_review").style.display = "none";
    }

    setRestId(id) {
        document.getElementById("add_review_form").getAttribute('restId');
    }
    render() {
        return (
            <div id="get_all_review">

            </div>
        );
    }
}


export default GetReviews;


