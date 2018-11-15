import React from 'react';

class AddReview extends React.Component {

  show = () => {
    this.props.showtoggle('review', true, this.props.restaurantId);
  }

  render() {
    return (
      <button className="add_review_btn" onClick={this.show}>Add Review</button>
    );
  }
}

export default AddReview;
