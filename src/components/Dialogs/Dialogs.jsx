import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import { useForm } from 'react-hook-form'


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

  if (!props.isAuth) return <Redirect to={'/login'} />

  const AddMessageForm = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
      data = { ...data, id: Number(match.params.slug) }
      props.addMessage(data)
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea {...register('newMessageBody', { maxLength: 140 })} />
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
              {messagesElements}
              <AddMessageForm />
            </div>
          } } />
        </Switch>
      </div>
    </div>
  )
}

export default Dialogs;