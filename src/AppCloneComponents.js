import React from 'react';
import "./AppJSXCompiler.css"

/**
 * Use React.cloneElement to Extend Functionality of Children Components
 * We can utilize React.cloneElement in order to create new components 
 * with extended data or functionality.
 */

class App extends React.Component {
    render() {
        return (
            <Buttons>
                <button value="A">A</button>
                <button value="B">B</button>
                <button value="C">C</button>
            </Buttons>
        );
    }
}

class Buttons extends React.Component {
    constructor() {
        super();
        this.state = { selected: 'None' }
    }

    selectItem(selected) {
        this.setState({ selected })
    }

    render() {
        let iteratorFn = child =>
            React.cloneElement(child,
                { onClick: this.selectItem.bind(this, child.props.value) })

        let items = React.Children.map(this.props.children, iteratorFn);

        return (
            <div>
                <h2>You have selected: {this.state.selected}</h2>
                {items}
            </div>
        );
    }
}


export default App;