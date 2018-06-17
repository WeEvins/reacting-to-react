import React from 'react';
import './index.css';

// const App = (props) => {
//     return (
//         <h1>{props.headerValue}</h1>
//     )
// }
// export default App;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'what ever text here'
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.headerValue}</h1>
                <h2>{this.state.text}</h2>
                <input type="text" placeholder={this.state.text} />  
            </div>
        )
    }
}