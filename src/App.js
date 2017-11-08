import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            text: "Default text"
        }
    }

    updateText(event) {
        this.setState({ text: event.target.value });
    }

    render() {
        const { name, age } = this.props;
        return (
            <div>
                <h1>Hello {name}, you are {age} years old.</h1>
                <p>Enter something in the input and see what happens</p>
                <Widget change={this.updateText.bind(this)} />
                <p><code>state.text</code>: {this.state.text}</p>
            </div>
        );
    }
}

App.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
}

App.defaultProps = {
    name: "Default name",
    age: 99
}

const Widget = (props) => (
    <input type="text" onChange={props.change} />
);

Widget.propTypes = {
    change: PropTypes.func.isRequired
}

export default App;