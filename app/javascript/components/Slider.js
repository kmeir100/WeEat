
import React from 'react';

class RangeSlider extends React.Component {

constructor(props) {
        super(props);
        this.state = {
            selectValue: 180,
        };
    }

    handleChange = (e) => {
        this.props.onChangeProp(parseInt(e.target.value));
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



//
// <form>
//     <input type="range" name="foo" min="1" max="180" className="slider" onChange={this.handleChange}/>
//     <output htmlFor="foo" onforminput="value = foo.valueAsNumber;"></output>
// </form>

// <input
//     id="typeinp" type="range" min="1" max="180" value={this.state.selectValue} onChange={this.handleChange} step="1"/>
export default RangeSlider;


