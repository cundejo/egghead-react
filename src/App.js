import React from 'react';

const Headline = () => {
    return (
        <h1 className="title">Hello World</h1>
    )
};

const Greeting = (props) => {
    const {name, age} = props;
    return (
        <p>Hello {name}, you have {age}, and we are testing react.</p>
    )
};

const App = () => {
    return (
        <div>
            <Headline/>
            <Greeting name="Oliver" age={25}/>
        </div>
    )
};

Greeting.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number.isRequired,
};


export default App;
