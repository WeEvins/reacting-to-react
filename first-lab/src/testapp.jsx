import React from 'react';
import './index.css';

// const App = (props) => {
//     return (
//         <h1>{props.headerValue}</h1>
//     )
// }
// export default App;

export default class App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <h1>{this.props.headerValue}</h1>
        )
    }
}