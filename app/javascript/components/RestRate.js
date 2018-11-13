import React from 'react';

class RestRate extends React.Component {
    render() {
        const rate = (this.props.rate / 5.0) * 125.0;
        return (
            <div className="rate">
                <div className="star-ratings-css">
                    <div className="star-ratings-css-top" style={{width:rate+'%'}}>
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                    <div className="star-ratings-css-bottom">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                </div>
            </div>
        );
    }
}


export default RestRate;


