//ACTIONS:
//click info-modal
//click reset game
//input a guess
//click submit button on form

export const RESET_GAME = 'RESET_GAME';
export const resetGame = correctNum => {
  type: RESET_GAME,
  correctNum
}

export const NEW_GUESS = 'NEW_GUESS';
export const newGuess = guess => {
  type: NEW_GUESS,
  guess
}

export const GIVE_FEEDBACK = 'GIVE_FEEDBACK';
export const giveFeedback = feedback => {
  type: GIVE_FEEDBACK,
  feedback
}

export const TOGGLE_INFO = 'TOGGLE_INFO';
export const toggleInfo = display => {
  type: TOGGLE_INFO,
  display
}
