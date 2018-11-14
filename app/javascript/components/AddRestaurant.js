import React from 'react';

class AddRestaurant extends React.Component {

  show() {
    document.getElementById('add-rest-form').style.display = 'block';
  }

  render() {
    return (
      <button className="add-btn" onClick={this.show}>Add Restaurant</button>
    );
  }
}

export default AddRestaurant;
