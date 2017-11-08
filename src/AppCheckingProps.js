import React from 'react';
import ReactDOM from 'react-dom';

/**
 * The React component lifecycle will allow you to update your components at runtime. 
 * This lesson will explore how to do that. componentWillReceiveProps gives us an opportunity 
 * to update state by reacting to a prop transition before the render() call is made. 
 * shouldComponentUpdate allows us to set conditions on when we should update a component 
 * so that we are not rendering constantly. componentDidUpdate lets us react to a component updating.
 */

class App extends React.Component {

    constructor() {
        super();
        this.state = { increasing: false };
    }

    update() {
        ReactDOM.render(
            <App val={this.props.val + 1} />,
            document.getElementById('root')
        );
    }

    // New properties are coming into the component. 
    // And we save in increasing if the val prop coming 
    // is bigger than the actual val
    componentWillReceiveProps(nextProps) {
        this.setState({ increasing: nextProps.val > this.props.val })
    }

    // Only update the component if the val in the next val is multiple of 5.
    shouldComponentUpdate(nextProps /*, nextState */) {
        return nextProps.val % 5 === 0;
    }

    render() {
        console.log(this.state.increasing);
        return (
            <button onClick={this.update.bind(this)}>
                {this.props.val}
            </button>
        );
    }

    // Only will execute when the component is updated
    componentDidUpdate(prevProps /*, prevState */) {
        console.log(`prevProps: ${prevProps.val}`);
    }
}

App.defaultProps = { val: 0 };

export default App;