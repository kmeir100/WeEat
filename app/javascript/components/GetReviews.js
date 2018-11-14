import React from 'react';

class GetReviews extends React.Component {

  show() {
    document.getElementById("get-all-reviews").style.display = "block";
  }

  render() {
    return (
      <button className="show_reviews" onClick={this.show}>See all reviews</button>
    );
  }
}

export default GetReviews;
