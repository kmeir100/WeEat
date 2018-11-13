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
                <option value="Burger">Burger</option>
                <option value="American">American</option>
                <option value="Asian">Asian</option>
                <option value="Coffee">Coffee</option>
            </select>
        );
    }
}


export default DropDown;


