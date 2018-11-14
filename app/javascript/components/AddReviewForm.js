import React from 'react';
import axios from 'axios';

class AddReviewForm extends React.Component {

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

  addRestaurant = () => {
    const id = document.getElementById("add-review-form").getAttribute('restId');
    //console.log("data= " + this.state.reviews.name + " " + this.state.reviews.description + " " + this.state.reviews.rate);
    axios.post(`/restaurants/` + id + '/reviews', {
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

  handleChange = (event) => {
    //console.log("e name= " + event.target.value);
    const items = this.state.reviews;

    switch (event.target.name) {
      case 'name':
        items.name = event.target.value;
        break;
      case 'description':
        items.description = event.target.value;
        break;
      case 'rate':
        items.rate = event.target.value;
        break;
      default:
        return;
    }

    this.setState({reviews: items});
  }

  hide() {
    document.getElementById("add-review-form").style.display = "none";
  }

  render() {
    return (
      <div id="add-review-form">
        <form className="addreview-form">
          Your name: <input type="text" align="left" name="name" onChange={this.handleChange}></input><br/>
          What do you think about this restaurant?: <input type="text" align="left" name="description" onChange={this.handleChange}></input><br/>
          rate: <input type="text" name="rate" onChange={this.handleChange}></input><br/>
          <div className="form_btn" align="center">
            <input type="button" value="Cancel" onClick={this.hide}></input>
            <input type="reset" value="Reset"></input>
            <input type="button" value="Submit" onClick={this.addRestaurant}></input>
          </div>
        </form>
      </div>
    );
  }
}

export default AddReviewForm;
