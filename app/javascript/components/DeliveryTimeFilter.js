import React from 'react';

class RangeSlider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectValue: 180,
    };
  }

  handleChange = (e) => {
    this.props.onChange(parseInt(e.target.value), 'delivery_time');
    this.setState({
      selectValue: e.target.value,
    });
  }


  render() {
    return (
      <div className="max-del-time">
        <button className="btn" onClick={this.handleChange} value="30">30</button>
        <button className="btn" onClick={this.handleChange} value="60">60</button>
        <button className="btn" onClick={this.handleChange} value="90">90</button>
        <button className="btn" onClick={this.handleChange} value="120">120</button>
        <button className="btn" onClick={this.handleChange} value="180">180</button>
      </div>
    );
  }
}

export default RangeSlider;
