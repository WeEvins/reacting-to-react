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
            text: 'what ever text here',
            hasLoaded: false
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.hasLoaded &&
                    <div>
                        <h1>{this.props.headerValue}</h1>
                        <h2>{this.state.text}</h2>
                        <input type="text" placeholder={this.state.text} onChange={() => this.setState({ inputValue: 'test' })} />
                        <button onClick={() => this.setState({ hasLoaded: !this.state.hasLoaded })}>click</button>
                    </div>
                }
                {!this.state.hasLoaded &&
                    <div>
                        <h1>Loading...</h1>
                        <button onClick={() => this.setState({ hasLoaded: !this.state.hasLoaded })}>click</button>
                    </div>
                }
            </React.Fragment>
        )
    }
}