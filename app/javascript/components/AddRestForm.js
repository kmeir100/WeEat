import React from 'react';
import axios from 'axios';

class AddRestForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rests: [],
      addRest: {
        name: "",
        cuisine: "",
        tenbis: false,
        address: "",
        delivery_time: 180,
      },
    };
  }

  addRestaurant = (e) => {
    axios.post(`/restaurants`, {
      name: this.state.addRest.name,
      cuisine: this.state.addRest.cuisine,
      tenbis: this.state.addRest.tenbis,
      address: this.state.addRest.address,
      delivery_time: this.state.addRest.delivery_time,
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
    //console.log("e name= " + e.target.value);
    const items = this.state.addRest;

    switch (event.target.name) {
      case 'name':
        items.name = event.target.value;
        break;
      case 'cuisine':
        items.cuisine = event.target.value;
        break;
      case 'tenbis':
        items.tenbis = event.target.value == 'on' ? true : false;
        break;
      case 'address':
        items.address = event.target.value;
        break;
      case 'delivery_time':
        items.delivery_time = event.target.value;
        break;
      default:
        return;
    }

    this.setState({addRest: items});
  }


  hide() {
    document.getElementById("add_rest_form").style.display = "none";
  }

  render() {
    return (
      <div id="add_rest_form">
        <form className="add_rest_form">
          Restaurant name: <input type="text" align="left" name="name" onChange={this.handleChange}></input><br/>
          Address: <input type="text" align="left" name="address" onChange={this.handleChange}></input><br/>
          Cuisine: <input type="text" name="cuisine" onChange={this.handleChange}></input><br/>
          Maximum delivery time: <input type="text" name="delivery_time" onChange={this.handleChange}></input><br/>
          Accept 10Bis: <input type="checkbox" name="tenbis" onChange={this.handleChange}></input><br/>
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

export default AddRestForm;
