import React from 'react';

class AddReview extends React.Component {

  show = () => {
    //console.log("on " + this.props.restaurantId);
    document.getElementById('add-review-form').setAttribute('restId', this.props.restaurantId);
    document.getElementById('add-review-form').style.display = "block";
  }

  render() {
    //console.log("on " + this.props.restaurantId);
    return (
      <button className="add_review_btn" onClick={this.show}>Add Review</button>
    );
  }
}

export default AddReview;
