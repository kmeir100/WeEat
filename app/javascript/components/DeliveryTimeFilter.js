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
    const times = [30, 60, 90, 120, 180];
    return (
      <div className="max-del-time">
      {times.map(item => {
        return (<button className="btn" onClick={this.handleChange} key={item} value={item}>{item}</button>);
      })}
      </div>
    );
  }
}

export default RangeSlider;
