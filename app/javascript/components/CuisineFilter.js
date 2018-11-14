import React from 'react';

class CuisineFilter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectValue: 'All',
    };
  }

  handleChange = (event) => {
    this.props.onChange(event.target.value, 'cuisine');
    this.setState({
      selectValue: event.target.value,
    });
  }

  render() {
    const cuisines = ['All', 'Pizza', 'Italian', 'Steak', 'American', 'German', 'Ramen',
      'Ukrainian', 'French', 'Bakery', 'Chinese', 'Asian', 'BBQ', 'Burger',
      'Southern', 'European', 'Belgian', 'Seafood', 'Desserts'];

    return (
      <select className="cuisine-select" value={this.state.selectValue} onChange={this.handleChange}>
        {cuisines.map(item => {
          return (<option key={item} value={item}>{item}</option>);
        })}
      </select>
    );
  }
}

export default CuisineFilter;
