
import * as serviceWorker from './serviceWorker';



export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App 
        state={state} 
        addPost={state.addPost} 
        updateNewPostText={state.updateNewPostText}
        addMessage={state.addMessage}
        updateNewMessageText={state.updateNewMessageText} 
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
