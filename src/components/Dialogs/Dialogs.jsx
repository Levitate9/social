import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import { useForm } from 'react-hook-form'


const Dialogs = (props) => {
  let state = props.dialogsPage;
  state.dialogs.sort((a, b) => a.dialog_id - b.dialog_id)
  let match = useRouteMatch('/dialogs/:id')

  
  let filterMessages = state.dialogs.filter((el) => {
    if (match === null) {
      return state.dialogs[0]
     } 
    return el.dialog_id === parseInt(match.params.id)
  })

  let messagesElements = filterMessages[0].chat_history.map( m => <Message 
    key={m.message_id} 
    message={m.message_text} 
    owner={m.owner} 
    date={m.message_date} 
  />)

  let dialogsElements = state.dialogs.map(el => {
    let last_message = el.chat_history[el.chat_history.length - 1].message_text
    let date = el.chat_history[el.chat_history.length - 1].message_date
    let time = `${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}` 
    return <DialogItem 
      key={el.dialog_id} 
      name={el.user_name} 
      id={el.dialog_id} 
      message={last_message} 
      time={time}
    />
  })

  if (!props.isAuth) return <Redirect to={'/login'} />

  const AddMessageForm = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
      data = { 
        ...data, 
        id: parseInt(match.params.id), 
        owner: true,
        message_date: new Date()
      }
      props.addMessage(data)
    }

    return (
      <form className={s.add_message_form} onSubmit={handleSubmit(onSubmit)}>
        <input {...register('newMessageBody', { maxLength: 1000 })} 
          placeholder='Message' autoFocus />
        <div><button type='submit'>Send</button></div>
      </form>
    )
  }
 
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElements}</div>
      <div className={s.messages_items}>
        <Switch>
          <Route exact path={'/dialogs/'} render={ () => <div>select chat to start a conversation</div> } />
          <Route path={'/dialogs/:id'} render={ () => {
            return <div className={s.messages_items_area}>
              <div>{messagesElements}</div>
              <div><AddMessageForm /></div>
            </div>
          } } />
        </Switch>
      </div>
    </div>
  )
}

export default Dialogs