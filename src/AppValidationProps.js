import React from 'react';

const App = (props) => (
    <h1>Title: {props.title}</h1>
);

App.propTypes = {
    title(props, propName) {
        if (!(propName in props)) {
            return new Error(`Missing ${propName}`);
        }
        if(props[propName].length < 6){
            return new Error(`The ${propName} must be more than 6 characters`)
        }
    }
}

export default App;
