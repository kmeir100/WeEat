import React from 'react';

class AddRestaurant extends React.Component {

  show = () => {
    this.props.showtoggle('restaurant', true);
  }

  render() {
    return (
      <button className="add-btn" onClick={this.show}>Add Restaurant</button>
    );
  }
}

export default AddRestaurant;
