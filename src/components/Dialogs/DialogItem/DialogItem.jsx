import React from 'react'
import s from './DialogItem.module.css'
import { NavLink, useRouteMatch } from 'react-router-dom'


const DialogItem = (props) => {
  let path = '/dialogs/' + props.id

  let match = useRouteMatch('/dialogs/:id')
  let dialogId
  match === null ? dialogId = null : dialogId = parseInt(match.params.id)

  return (
    <div className={props.id === dialogId ? s.dialog_item + ` ${s.active}` : s.dialog_item}>
      <NavLink to={path}>
        <div><b>{props.name}</b></div>
      </NavLink>
    </div>
  )
}

export default DialogItem