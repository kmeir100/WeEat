import React from 'react';
import axios from 'axios';

class GetReviews extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      restId: 1,
      reviews: [],
    };
  }

  hide() {
    document.getElementById("get-all-reviews").style.display = "none";
  }

  render() {
    return (
      <div id="get-all-reviews">
        <input type="button" value="Exit" onClick={this.hide}></input>
      </div>
    );
  }
}

export default GetReviews;
