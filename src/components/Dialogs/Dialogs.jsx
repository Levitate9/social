import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect, Route, Switch } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { createField, Textarea } from '../common/FormsControls/FormsControls';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';


const Dialogs = (props) => {
  let state = props.dialogsPage;
  let match = useRouteMatch('/dialogs/:slug')

  let dialogsElements = state.dialogs.map(el => <DialogItem key={el.dialog_id} name={el.user_name} id={el.dialog_id} />)
  let filterMessages = state.dialogs.filter((el) => {
    if (match === null) {
      return state.dialogs[0]
     } 
    return el.dialog_id === Number(match.params.slug)
  })

  let messagesElements = filterMessages[0].chat_history.map( m => {
    return <Message key={m.message_id} message={m.message_text} owner={m.owner} />
  })

  let addNewMessage = (values) => {
    props.addMessage(values.newMessageBody)
  }

  if (!props.isAuth) return <Redirect to={'/login'} />

  const AddMessageForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          { createField('Enter your message', 'newMessageBody', [], Textarea) }
        </div>
        <div><button>Add message</button></div>
      </form>
    )
  }
 
  const AddMessageReduxForm = reduxForm({ form: 'addMessageForm' })(AddMessageForm)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElements}</div>
      <div className={s.message_items}>
        <Switch>
          <Route exact path={'/dialogs/'} render={ () => <div>select chat to start a conversation</div> } />
          <Route path={'/dialogs/:id'} render={ () => {
            return <div>
              {messagesElements}
              <AddMessageReduxForm onSubmit={addNewMessage} />
            </div>
          } } />
        </Switch>
      </div>
    </div>
  )
}

export default Dialogs;