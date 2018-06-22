import React from 'react';
import {connect} from 'react-redux';

import './styles/guess-form.css';

export default function GuessForm(props) {
    return (
        <form onSubmit={e => props.newGuess(e)}>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required ref={props.input} />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess" />
        </form>
    );
};