import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default function Game(){
    return (
        <div>
            <Header />
            <GuessSection />
            <GuessCount />
            <GuessList  />
        </div>
    )
}

    // newGuess(event) {
    //     event.preventDefault();

    //     let inputValue = Number(this.input.current.value);

    //     if (this.state.guesses.includes(inputValue)) {
    //         this.setState({
    //             feedback: "You guessed this number already"
    //         })
    //     } else {
    //         this.setState({
    //             guesses: [...this.state.guesses, inputValue],
    //             count: this.state.count + 1
    //         })
    //         this.giveFeedback(this.input.current.value);
    //     }
    // }

    // giveFeedback(userInput) { 
    //     let correctNum = this.state.correctNum

    //     if (userInput - correctNum <= 10 || userInput - correctNum >= -10) {

    //         this.setState({
    //             feedback: "SUPER close!"
    //         })
    //     }
        
    //     if (userInput - correctNum > 20 || userInput - correctNum < -20 ) {

    //         this.setState({
    //             feedback: "Nope!"
    //         })
    //     }
        
    //     if (userInput - correctNum > 10 && userInput - correctNum <= 20 || userInput - correctNum < -10 && userInput - correctNum >= -20 ) {

    //         this.setState({
    //             feedback: "Close!"
    //         })
    //     }

    //     if (userInput == correctNum) {

    //         this.setState({
    //             feedback: "Winner winner, chicken dinner!"
    //         })
    //     }
    // }
