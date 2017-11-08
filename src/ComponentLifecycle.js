import React from 'react';
import ReactDOM from 'react-dom';

class EventerApp extends React.Component {
    constructor() {
        super();
        this.state = { val: 0 };
        this.update = this.update.bind(this);
    }

    update() {
        this.setState({ val: this.state.val + 1 });
    }

    // This is fired right before the component is mounted in DOM
    componentWillMount(){
        console.log('componentWillMount');
    }

    render() {
        console.log('render');
        return (
            <button onClick={this.update}>{this.state.val}</button>
        );
    }

    // This is fired after component rendered in DOM
    componentDidMount(){
        console.log('componentDidMount');
    }

    // This is fired before component is unmounted/deleted from the DOM
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

}

class App extends React.Component {
    
    mount(){
        ReactDOM.render(<EventerApp />, document.getElementById('eventer'));
    }

    unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('eventer'));
    }

    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>Unmount</button>
                <div id="eventer"></div>
            </div>
        );
    }
}


export default App;