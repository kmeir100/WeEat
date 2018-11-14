import React from 'react';

class TenbisFilter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectValue: false,
    };
  }

  handleChange = () => {
    this.props.onChange(!this.state.selectValue, 'tenbis');
    this.setState({
      selectValue: !this.state.selectValue,
    });
  }

  render() {
    return (
      <label className="switch">
        <input type="checkbox" onChange={this.handleChange}/>
        <span className="togg round"/>
      </label>
    );
  }
}

export default TenbisFilter;
