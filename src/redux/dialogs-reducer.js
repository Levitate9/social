const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
  dialogs: [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Anrew' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Viktor' },
    { id: 6, name: 'Valera' }
  ],

  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'I`m good' },
    { id: 4, message: 'Let`s play some game' },
    { id: 5, message: 'What are you looking for?' },
    { id: 6, message: 'Newermind' }
  ]
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE: 
      return {
        ...state,
        messages: [...state.messages, {id: 7, message: action.text}]
      }
      
    default:
      return state;
  }
}

export const addMessage = (text) => ({ type: ADD_MESSAGE, text });

export default dialogsReducer;