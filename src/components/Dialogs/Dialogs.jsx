import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { createField, Textarea } from '../common/FormsControls/FormsControls';
// import { maxLengthCreator, required } from '../../utils/validators/validators';


const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(el => <DialogItem id={el.id} name={el.name} key={el.id} />);
  let messagesElements = state.messages.map(el => <Message message={el.message} key={el.id} />);

  let addNewMessage = (values) => {
    props.addMessage(values.newMessageBody)
  }

  if (!props.isAuth) return <Redirect to={'/login'} />

  // const maxLength140 = maxLengthCreator(140);    //обязательно создаётся за пределами формы

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
      <div className={s.dialogs_items}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <AddMessageReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  )
}

export default Dialogs;