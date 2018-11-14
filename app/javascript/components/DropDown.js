import React from 'react';

class DropDown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectValue: "All",
        };

    }

    handleChange = (e) => {
        this.props.onChangeProp(e.target.value);
        this.setState({
            selectValue: e.target.value,
        });

    }

    render() {
        return (
            <select className="cuisineSelect" value={this.state.selectValue}
                    onChange={this.handleChange}>
                <option value="All">All</option>
                <option value="Pizza">Pizza</option>
                <option value="Italian">Italian</option>
                <option value="Steak">Steak</option>
                <option value="American">American</option>
                <option value="German">German</option>
                <option value="Ramen">Ramen</option>
                <option value="Ukrainian">Ukrainian</option>
                <option value="French">French</option>
                <option value="Bakery">Bakery</option>
                <option value="Chinese">Chinese</option>
                <option value="Asian">Asian</option>
                <option value="BBQ">BBQ</option>
                <option value="Burger">Burger</option>
                <option value="Southern">Southern</option>
                <option value="European">European</option>
                <option value="Belgian">Belgian</option>
                <option value="Seafood">Seafood</option>
                <option value="Desserts">Desserts</option>
            </select>
        );
    }
}

export default DropDown;


