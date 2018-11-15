import React from 'react';
import header from '../../assets/images/header.jpg';
import Filter from './Filter';
import AddRestaurant from './AddRestaurant';

class Header extends React.Component {

  render() {
    return (
      <div className="page-header">
        <img className="header-img" src={header}/>
        <div className="text">WeEat</div>
        <div className="sub-text">Eat Differently</div>
        <div className="items-container">
          <AddRestaurant showtoggle={this.props.showtoggle}/>
          <Filter onFilterChanged={this.props.onFilterChanged}/>
        </div>
      </div>
    );
  }
}

export default Header;
