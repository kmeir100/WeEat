import React from 'react';
import axios from 'axios';

class AddRestForm extends React.Component {

  addRestaurant = (event) => {
    event.preventDefault();
    axios.post(`/restaurants`, {
      name: event.target.name.value,
      cuisine: event.target.cuisine.value,
      tenbis: event.target.tenbis.value,
      address: event.target.address.value,
      delivery_time: event.target.delivery_time.value,
    })
      .then(response => {
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
    this.props.changeState('restaurant', false);
  }

  render() {
    const showOrHide = this.props.isRestFormDisplayed?'show':'hide';
    return (
      <div id="add-rest-form" className={showOrHide} >
        <form className="add-rest-form" onSubmit={this.addRestaurant}>
          Restaurant name: <input type="text" align="left" name="name"/><br/>
          Address: <input type="text" align="left" name="address"/><br/>
          Cuisine: <input type="text" name="cuisine"/><br/>
          Maximum delivery time: <input type="text" name="delivery_time"/><br/>
          Accept 10Bis: <input type="checkbox" name="tenbis"/><br/>
          <div className="form_btn" align="center">
            <input type="button" value="Cancel" onClick={this.hide}/>
            <input type="reset" value="Reset"/>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddRestForm;
