import React from 'react';

class App extends React.Component {

    state = { a: '', b: '', c: '' }

    update() {
        this.setState({
            stateA: this.a.value,
            stateB: this.refs.b.value,
            stateC: this.c.refs.input.value
        });
    }

    render() {
        return (
            <div>
                <input
                    ref={node => this.a = node}
                    type="text"
                    onChange={this.update.bind(this)}
                />
                {this.state.stateA}
                <hr />
                <input
                    ref="b"
                    type="text"
                    onChange={this.update.bind(this)}
                />
                {this.state.stateB}
                <hr />
                <Input
                    ref={component => this.c = component}
                    update={this.update.bind(this)}
                />
                {this.state.stateC}
            </div>
        );
    }
}

class Input extends React.Component {
    state = {}
    render() {
        return (
            <div style={{ display: 'inline' }}>
                <input ref="input" type="text" onChange={this.props.update} />
            </div>
        );
    }
}


export default App;
