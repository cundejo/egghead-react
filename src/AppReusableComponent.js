import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

/**
 * Write More Reusable React Components with Composable APIs
 * To make more composable React components, you can define 
 * common APIs for similar component types.
 */

class App extends React.Component {
    constructor() {
        super();
        this.state = { money: 0 };
        this.update = this.update.bind(this);
    }

    update() {
        this.setState({
            money: this.money.refs.inp.value
        })
    }

    render() {
        return (
            <div>
                <NumInput 
                ref={node => this.money = money}
                min={0}
                max={256}
                val={+this.state.money}
                label="Money"
                update={this.update} />
            </div>
        );
    }
}

class NumInput extends React.Component {
    render() {
        let label = this.props.label !== '' ? <label>{this.props.label} - {this.props.val}</label> : ''
        return (
            <div>
                <input ref="input"
                    type={this.props.type}
                    min={this.props.min}
                    max={this.props.max}
                    step={this.props.step}
                    defaultValue={this.props.val}
                    onChange={this.props.update} />
                {label}
            </div>
        );
    }
}

NumInput.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    val: PropTypes.number,
    label: PropTypes.string,
    update: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['number', 'range'])
}

NumInput.defaultProps = {
    min: 0,
    max: 100,
    step: 1,
    val: 0,
    label: '',
    type: 'range',
}

export default App;