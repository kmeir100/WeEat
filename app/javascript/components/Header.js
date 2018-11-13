import React from 'react';
import headersmall from "../../assets/images/headersmall.jpg";
import Filter from "./Filter";
import AddRestaurant from './AddRestaurant';


class Header extends React.Component {

    render() {
        return (
            <div className="page-header">
                <img className="header-img" src={headersmall}/>
                <div className="text">WeEat</div>
                <div className="sub-text">Eat Differently</div>
                <div className="items-container">
                    <AddRestaurant />
                    <Filter passFilter={this.props.onFilterChanged}/>
                </div>
            </div>
        );
    }
}

export default Header;


