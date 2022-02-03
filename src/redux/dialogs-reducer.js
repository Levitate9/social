const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
  dialogs: [
    { 
      dialog_id: 1,
      user_name: 'Dimych',
      chat_history: [
        { message_id: 1, owner: true, message_text: 'Hello Dimych', message_date: new Date('December 17, 2021 10:03:00') },
        { message_id: 2, owner: false, message_text: 'yo', message_date: new Date('December 17, 2021 10:04:00') },
        { message_id: 3, owner: true, message_text: 'How are you', message_date: new Date('December 17, 2021 10:04:30') },
        { message_id: 4, owner: false, message_text: 'I`m fine, thanks Mark', message_date: new Date('December 17, 2021 10:05:00') }
      ]
    },

    { 
      dialog_id: 2,
      user_name: 'Andrew',
      chat_history: [
        { message_id: 1, owner: true, message_text: 'Hello Andrew', message_date: new Date('December 17, 2021 10:06:00') },
        { message_id: 2, owner: false, message_text: 'Hello', message_date: new Date('December 17, 2021 10:07:00') },
        { message_id: 3, owner: true, message_text: 'How about chess match?', message_date: new Date('December 17, 2021 10:07:30') },
        { message_id: 4, owner: false, message_text: 'Well, if you`re ready to losse..again))', message_date: new Date('December 17, 2021 10:09:00') },
        { message_id: 5, owner: true, message_text: 'I had some practice since our last game', message_date: new Date('December 17, 2021 10:10:00') },
        { message_id: 6, owner: true, message_text: 'And now I`m going to take revenge)', message_date: new Date('December 17, 2021 10:11:00') }
      ]
    },

    { 
      dialog_id: 3,
      user_name: 'Sasha',
      chat_history: [
        { message_id: 1, owner: true, message_text: 'Yo mate', message_date: new Date('December 17, 2021 12:03:00') },
        { message_id: 2, owner: true, message_text: 'you MUST check the new Ital Tek album', message_date: new Date('December 17, 2021 12:03:20') },
        { message_id: 3, owner: true, message_text: 'it`s called Otlands', message_date: new Date('December 17, 2021 12:03:50') },
        { message_id: 4, owner: false, message_text: 'yo', message_date: new Date('December 17, 2021 12:41:10') },
        { message_id: 5, owner: false, message_text: 'Already done!) ', message_date: new Date('December 17, 2021 12:42:00') },
        { message_id: 6, owner: true, message_text: 'Favorite track?', message_date: new Date('December 17, 2021 12:42:40') },
        { message_id: 7, owner: false, message_text: 'Chamber Music for sure', message_date: new Date('December 17, 2021 12:43:00') },
        { message_id: 8, owner: true, message_text: 'That`s my boy!)', message_date: new Date('December 17, 2021 12:43:30') }
      ]
    },

    { 
      dialog_id: 4,
      user_name: 'Alicia',
      chat_history: [
        { message_id: 1, owner: true, message_text: 'Good morning Alicia', message_date: new Date('December 18, 2021 09:37:00') },
        { message_id: 2, owner: false, message_text: 'Hi', message_date: new Date('December 18, 2021 09:40:00') },
        { message_id: 3, owner: true, message_text: 'Do you have any plans for Friday night?', message_date: new Date('December 18, 2021 09:41:00') },
        { message_id: 4, owner: false, message_text: 'I`m completely free on Friday', message_date: new Date('December 18, 2021 09:42:00') },
        { message_id: 5, owner: true, message_text: 'How about going to the cinema?', message_date: new Date('December 18, 2021 09:42:30') },
        { message_id: 6, owner: true, message_text: 'I have two tickets for DUNE', message_date: new Date('December 18, 2021 09:43:00') },
        { message_id: 7, owner: false, message_text: 'Oh, I really thought that you would never take me to the cinema))', message_date: new Date('December 18, 2021 09:44:00') },
        { message_id: 8, owner: false, message_text: 'With pleasure, Mark!', message_date: new Date('December 18, 2021 09:44:30') }
      ]
    },

    { 
      dialog_id: 5,
      user_name: 'Rob',
      chat_history: [
        { message_id: 1, owner: false, message_text: 'Hello Mark', message_date: new Date('December 18, 2021 12:31:00') },
        { message_id: 2, owner: false, message_text: 'Join us at friday`s night ride', message_date: new Date('December 18, 2021 12:31:10') },
        { message_id: 3, owner: false, message_text: 'It will be fun', message_date: new Date('December 18, 2021 12:31:30') },
        { message_id: 4, owner: true, message_text: 'Hi there', message_date: new Date('December 18, 2021 12:34:00') },
        { message_id: 5, owner: true, message_text: 'Sorry buddy, on Friday I`m going to the movies with a very beautiful girl you know))', message_date: new Date('December 18, 2021 12:34:30') },
        { message_id: 6, owner: false, message_text: 'Alicia?!', message_date: new Date('December 18, 2021 12:35:00') },
        { message_id: 7, owner: true, message_text: 'yep)', message_date: new Date('December 18, 2021 12:35:30') },
        { message_id: 8, owner: false, message_text: 'You`re the man! Have a good time', message_date: new Date('December 18, 2021 12:36:10') },
        { message_id: 9, owner: true, message_text: 'Thanks mate)', message_date: new Date('December 18, 2021 12:37:00') }
      ]
    },

    { 
      dialog_id: 6,
      user_name: 'Nick',
      chat_history: [
        { message_id: 1, owner: false, message_text: '...I`m quiet mellow', message_date: new Date('December 20, 2021 19:49:00') },
        { message_id: 2, owner: true, message_text: 'a white fellow', message_date: new Date('December 20, 2021 19:51:00') },
        { message_id: 3, owner: false, message_text: 'My pee is a bright yellow', message_date: new Date('December 20, 2021 19:51:30') },
        { message_id: 4, owner: true, message_text: 'I like a Jell-O', message_date: new Date('December 20, 2021 19:52:00') },
        { message_id: 5, owner: false, message_text: 'I like `Hello`...', message_date: new Date('December 20, 2021 19:52:20') },
        { message_id: 6, owner: true, message_text: 'living legend', message_date: new Date('December 20, 2021 19:53:00') },
        { message_id: 7, owner: false, message_text: 'true', message_date: new Date('December 20, 2021 19:53:15') }
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
                message_date: action.data.message_date
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