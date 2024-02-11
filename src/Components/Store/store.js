import { createStore } from 'redux';

const initialState = {
  selectedCard: null
};

export const selectCard = (cardData) => {
  return {
    type: 'SELECT_CARD',
    payload: cardData
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_CARD':
      return {
        ...state,
        selectedCard: action.payload
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
