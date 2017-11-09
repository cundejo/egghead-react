import React from 'react';

/**
 * Use map to Create React Components from Arrays of Data
 * React components can be dynamically generated based on a dataset. 
 * This lesson will show you how to do just that by mapping over 
 * the state.data object.
 */

class App extends React.Component {
    constructor() {
        super();
        this.state = { items: [] }
    }

    componentWillMount() {
        fetch('https://swapi.co/api/people/?format=json')
            .then(response => response.json())
            .then(({ results: items }) => this.setState({ items }))
    }

    filter(event){
        this.setState({filter: event.target.value});
    }

    render() {
        let items = this.state.items;

        if (this.state.filter) {
            items = items.filter(
                item => item.name.toLowerCase()
                    .includes(this.state.filter.toLowerCase())
            )
        }

        return (
            <div>
                <input type="text" onChange={this.filter.bind(this)}/>
                {
                    items.map(item => <Person key={item.name} person={item} />)
                }
            </div>
        );
    }
}

const Person = (props) => <h4>{props.person.name}</h4>

export default App;