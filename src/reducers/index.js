import {RESET_GAME, NEW_GUESS, GIVE_FEEDBACK, TOGGLE_INFO} from '../actions';

const initialState = {
  count: 0,
  guesses: [],
  feedback: 'Make your guess!',
  correctNum: Math.floor((Math.random() * 100) + 1),
  display: false // this is from the header component
};

export const gameReducer = (state = initialState, action) => {

  if (action.type === RESET_GAME) {
    return {
      ...state,
      count: 0,
      guesses: [],
      feedback: 'Make your guess!',
      correctNum: action.correctNum,
      display: false
    }
  }

  if (action.type === NEW_GUESS) {
    return {
      ...state,
      guesses: [...state.guesses, action.guess],
      count: state.count + 1
    }
  }

  if (action.type === TOGGLE_INFO) {
    return {
      ...state,
      display: !state.display
    }
  }

  return state
}
