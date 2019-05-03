import React, { Component } from 'react';
import Header from './Header/Header';
import Clicker from './Clicker/Clicker';

const startingClickerValue = 0;

class App extends Component {
    state = {
        clickerValue: startingClickerValue
    }

    incrementValue() {
        this.setState({
            clickerValue: this.state.clickerValue + 1
        })
    }

    decrementValue() {
        this.setState({
            clickerValue: this.state.clickerValue - 1
        })
    }

    resetValue() {
        this.setState({
            clickerValue: startingClickerValue
        })
    }

    render() {
        return (
            <div>
                <Header />
                <Clicker value={this.state.clickerValue} incrementValue={this.incrementValue.bind(this)}
                    decrementValue={this.decrementValue.bind(this)} resetValue={this.resetValue.bind(this)} />
            </div>
        );
    }
}

export default App;
