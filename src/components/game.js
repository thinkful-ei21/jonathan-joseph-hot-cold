import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            guesses: [],
            feedback: "Make your guess!"
        }
        this.input = React.createRef();
    }

    resetGame() {
        this.setState({
            count: 0,
            guesses: [],
            feedback: "Make your guess!"
        })
    }

    newGuess(event) {
        event.preventDefault();
        this.setState({
            guesses: [...this.state.guesses, this.input.current.value]
        })
        console.log(this.input.current.value);
    }

    render() {
        
        return (
            <div>
                <Header resetGame={() => this.resetGame()}/>
                <GuessSection feedback={this.state.feedback} newGuess={(e) => this.newGuess(e)} input={this.input} />
                <GuessCount />
                <GuessList guesses={this.state.guesses} />
            </div>
        )
    }
}
