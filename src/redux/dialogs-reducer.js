const ADD_MESSAGE = 'ADD-MESSAGE'

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
      let restDialogs = state.dialogs.filter(d => d.dialog_id !== action.data.id)
      let id = action.data.id - 1
            
      return { 
        ...state, 
        dialogs: [
          state.dialogs[id] = {
            ...state.dialogs[id],
            chat_history: [
              ...state.dialogs[id].chat_history, {
                message_id: state.dialogs[id].chat_history.length + 1,
                owner: action.data.owner,
                message_text: action.data.newMessageBody,
                message_date: ''
              }
            ]
          },
          ...restDialogs
        ]
      }
      
    default:
      return state
  }
}

export const addMessage = (data) =>  ({ type: ADD_MESSAGE, data })

export default dialogsReducer