import React from 'react';

class Toggle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectValue: false,
        };

    }

    handleChange = (e) => {
        this.props.onChangeProp(!this.state.selectValue);
        this.setState({
            selectValue: !this.state.selectValue,
        });
    }

    render() {
        return (
            <label className="switch">
                <input type="checkbox" onChange={this.handleChange}/>
                <span className="togg round" />
            </label>
        );
    }
}

export default Toggle;