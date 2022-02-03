import React from 'react'
import s from './DialogItem.module.css'
import { NavLink, useRouteMatch } from 'react-router-dom'
import avatar from '../../../assets/images/user.png'


const DialogItem = (props) => {
  let path = '/dialogs/' + props.id

  let match = useRouteMatch('/dialogs/:id')
  let dialogId
  match === null ? dialogId = null : dialogId = parseInt(match.params.id)

  return (
    <div className={props.id === dialogId ? s.dialog_item + ` ${s.active}` : s.dialog_item}>
      <NavLink to={path}>
        <div className={s.dialog_item_body}>
          <div className={s.user_avatar}>
            <img src={avatar} alt='avatar' />
          </div>
          <div className={s.body_area}>
            <div className={s.dialog_title}><b>{props.name}</b></div>
            <div className={s.message}>{props.message}</div>
          </div>
          <div className={s.time_area}>
            <div className={s.time}>{props.time}</div>
            <div></div>
          </div>
        </div>
      </NavLink>
    </div>
  )
}

export default DialogItem