// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
//
// import React from 'react';
// //import {render} from 'react-dom';
// import ReactDOM from 'react-dom'
// import restaurant from '../components/SampleComponent';
//
// ReactDOM.render(
//     <div> hey </div>,
//     document.getElementById('root')
// );

import React from 'react';
import { render } from 'react-dom';
import MainComponent from '../components/MainComponent';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.body.appendChild(document.createElement('div'));
    render(<MainComponent />, container);
});