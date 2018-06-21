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
            feedback: "Make your guess!",
            correctNum: 0
        }
        this.input = React.createRef();
    }

    componentDidMount() {
        const randomNum = Math.floor(Math.random() * 100);
        this.setState({
            correctNum: randomNum
        })
    }

    resetGame() {
        this.setState({
            count: 0,
            guesses: [],
            feedback: "Make your guess!",
            correctNum: Math.floor(Math.random() * 100)
        })
    }

    newGuess(event) {
        event.preventDefault();

        let inputValue = Number(this.input.current.value);

        if (this.state.guesses.includes(inputValue)) {
            this.setState({
                feedback: "You guessed this number already"
            })
        } else {
            this.setState({
                guesses: [...this.state.guesses, inputValue],
                count: this.state.count + 1
            })
            this.giveFeedback(this.input.current.value);
        }
    }

    giveFeedback(userInput) { 
        let correctNum = this.state.correctNum

        if (userInput - correctNum <= 10 || userInput - correctNum >= -10) {

            this.setState({
                feedback: "Hot"
            })
        }
        
        if (userInput - correctNum > 20 || userInput - correctNum < -20 ) {

            this.setState({
                feedback: "Cold"
            })
        }
        
        if (userInput - correctNum > 10 && userInput - correctNum <= 20 || userInput - correctNum < -10 && userInput - correctNum >= -20 ) {

            this.setState({
                feedback: "Kinda Hot"
            })
        }

        if (userInput == correctNum) {

            this.setState({
                feedback: "Winner winner, chicken dinner!"
            })
        }
    }

    render() {  

        return (
            <div>
                <Header resetGame={() => this.resetGame()}/>
                <GuessSection feedback={this.state.feedback} newGuess={(e) => this.newGuess(e)} input={this.input} />
                <GuessCount count={this.state.count} />
                <GuessList guesses={this.state.guesses} />
            </div>
        )
    }
}
