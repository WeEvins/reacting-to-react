import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './testapp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App headerValue='tester header stuff' />, document.getElementById('root'));
registerServiceWorker();

// Create App component, return simple html
// Render component from index.js
// pass prop from index.js to App, place value in html
// comment out functional component, recode as class component
// initialize state with string called 'text', assign arbitrary value
// use data from props and state in html
// add input to app, use component state to define placeholder

// on input change, set new property on App state
// replace wrappers with <React.Fragment>
// add button beneath input
// add hasLoaded state, init false
// btn click toggles hasLoaded state
// only return html if hasLoaded === true
// display "Loading..." and identical btn if hasLoaded === false
// on componentDidMount, set hasLoaded === trues

