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

  addReview = (event) => {
    event.preventDefault();
    axios.post(`/restaurants/` + this.props.restaurandId + '/reviews', {
      name: event.target.name.value,
      description: event.target.description.value,
      rate: event.target.rate.value,
    })
      .then(response => {
        console.log(response);
        // handle success
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
        this.hide();
      });
  }

  hide = () => {
    this.props.changeState('review', false);
  }

  render() {
    const showOrHide = this.props.isReviewFormDisplayed?'show':'hide';
    return (
      <div id="add-review-form" className={showOrHide}>
        <form className="add-review-form" onSubmit={this.addReview}>
          Your name: <input type="text" align="left" name="name" /><br/>
          What do you think about this restaurant?: <input type="text" align="left" name="description" /><br/>
          rate: <input type="text" name="rate" /><br/>
          <div className="form_btn" align="center">
            <input type="button" value="Cancel" onClick={this.hide}/>
            <input type="reset" value="Reset"/>
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    );
  }
}

export default AddReviewForm;
