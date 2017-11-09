import React from 'react';
import "./AppJSXCompiler.css"

/**
 * Build a JSX Live Compiler as a React Component
 * As a tool for future lessons, we want to have the ability to write JSX 
 * and see the output live in the browser. In this lesson we will use React 
 * to build our own live JSX compiler.
 */

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            input: '/* Add your JSX here */',
            output: '',
            error: '',
        }
    }

    update(event) {
        let code = event.target.value;
        try {
            this.setState({
                output: window.Babel.transform(code, { presets: ['es2015', 'react'] }).code,
                error: ''
            });
        } catch (err) {
            this.setState({ error: err.message });
        }
    }

    render() {
        return (
            <div>
                <header>{this.state.error}</header>

                <div className="container">
                    <textarea onChange={this.update.bind(this)}
                        defaultValue={this.state.input} />
                    <pre>
                        {this.state.output}
                    </pre>
                </div>
            </div>
        );
    }
}

export default App;