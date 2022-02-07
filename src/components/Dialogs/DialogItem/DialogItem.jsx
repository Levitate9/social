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
        <div className={s.dialog_item_wrap}>
          <div className={s.user_avatar}>
            <img src={avatar} alt='avatar' />
          </div>
          <div className={s.dialog_item_body}>
            <div className={s.dialog_title_area}>
              <div className={s.dialog_title}><b>{props.name}</b></div>
              <div className={s.dialog_time}>{props.time}</div>
            </div>
            <div className={s.dialog_subtitle_area}>
              <div className={s.subtitle_message}>{props.message}</div>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  )
}

export default DialogItem