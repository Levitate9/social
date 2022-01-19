const ADD_MESSAGE = 'ADD-MESSAGE'

// let initialState = {
//   dialogs: [
//     { id: 1, name: 'Dimych' },
//     { id: 2, name: 'Anrew' },
//     { id: 3, name: 'Sveta' },
//     { id: 4, name: 'Sasha' },
//     { id: 5, name: 'Viktor' },
//     { id: 6, name: 'Valera' }
//   ],

//   messages: [
//     { id: 1, message: 'Hi' },
//     { id: 2, message: 'How are you?' },
//     { id: 3, message: 'I`m good' },
//     { id: 4, message: 'Let`s play some game' },
//     { id: 5, message: 'What are you looking for?' },
//     { id: 6, message: 'Newermind' }
//   ]
// }

let initialState = {
  dialogs: [
    { 
      dialog_id: 1,
      user_name: 'Dimych',
      chat_history: [
        { message_id: 1, owner: true, message_text: 'Hello Dimych', message_date: '' },
        { message_id: 2, owner: false, message_text: 'yo', message_date: '' },
        { message_id: 3, owner: true, message_text: 'How are you', message_date: '' },
        { message_id: 4, owner: false, message_text: 'I`m fine, thanks', message_date: ''}
      ]
    },

    { 
      dialog_id: 2,
      user_name: 'Andrew',
      chat_history: [
        { message_id: 1, owner: true, message_text: 'Hello Andrew', message_date: '' },
        { message_id: 2, owner: false, message_text: 'yo', message_date: '' },
        { message_id: 3, owner: true, message_text: 'How are you', message_date: '' },
        { message_id: 4, owner: false, message_text: 'I`m fine, thanks', message_date: ''}
      ]
    },

    { 
      dialog_id: 3,
      user_name: 'Sveta',
      chat_history: [
        { message_id: 1, owner: true, message_text: 'Hello Sveta', message_date: '' },
        { message_id: 2, owner: false, message_text: 'yo', message_date: '' },
        { message_id: 3, owner: true, message_text: 'How are you', message_date: '' },
        { message_id: 4, owner: false, message_text: 'I`m fine, thanks', message_date: ''}
      ]
    },

    { 
      dialog_id: 4,
      user_name: 'Sasha',
      chat_history: [
        { message_id: 1, owner: true, message_text: 'Hello Sasha', message_date: '' },
        { message_id: 2, owner: false, message_text: 'yo', message_date: '' },
        { message_id: 3, owner: true, message_text: 'How are you', message_date: '' },
        { message_id: 4, owner: false, message_text: 'I`m fine, thanks', message_date: ''}
      ]
    },

    { 
      dialog_id: 5,
      user_name: 'Viktor',
      chat_history: [
        { message_id: 1, owner: true, message_text: 'Hello Viktor', message_date: '' },
        { message_id: 2, owner: false, message_text: 'yo', message_date: '' },
        { message_id: 3, owner: true, message_text: 'How are you', message_date: '' },
        { message_id: 4, owner: false, message_text: 'I`m fine, thanks', message_date: ''}
      ]
    },

    { 
      dialog_id: 6,
      user_name: 'Valera',
      chat_history: [
        { message_id: 1, owner: true, message_text: 'Hello Valera', message_date: '' },
        { message_id: 2, owner: false, message_text: 'yo', message_date: '' },
        { message_id: 3, owner: true, message_text: 'How are you', message_date: '' },
        { message_id: 4, owner: false, message_text: 'I`m fine, thanks', message_date: ''}
      ]
    }
  ]
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE: 
      return {
        ...state,
        messages: [...state.messages, {id: state.messages.length + 1, message: action.text}]
      }
      
    default:
      return state
  }
}

export const addMessage = (text) => ({ type: ADD_MESSAGE, text })

export default dialogsReducer