import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {

  _state: {

    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15}, 
        {id: 2, message: 'It`s my first post', likesCount: 20}
      ],

      newPostText: 'it-kamasutra.com'
    },
  
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Dimych'}, 
        {id: 2, name: 'Anrew'}, 
        {id: 3, name: 'Sveta'}, 
        {id: 4, name: 'Sasha'}, 
        {id: 5, name: 'Viktor'}, 
        {id: 6, name: 'Valera'} 
      ],
    
      messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I`m good'},
        {id: 4, message: 'Let`s play some game'},
        {id: 5, message: 'What are you looking for?'},
        {id: 6, message: 'Newermind'}
      ],
  
      newMessageText: ''
    },
  
    sidebar: {
      friends: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Sveta'}
      ]
    },
  
  },
  _callSubscriber() {
    console.log('State changed');
  },

  subscribe(observer) {
    store._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    //тут в редюсер приходит старый стэйт и экшен, после чего редюсер возвращает новый стэйт
    //и мы сохраняем его в соответствующей ветке стэйта
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;