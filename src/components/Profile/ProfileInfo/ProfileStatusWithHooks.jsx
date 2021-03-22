import React, { useEffect, useState } from 'react';

const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  let activateEditMode = () => {
    setEditMode(true)
  }

  let deactivateEditMode = () => {
    setEditMode(false)
    props.updateUserStatus(status)
  }

  let onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  //Хук useEffect срабатывает после отрисовки компонента, в котором он использован.
  //Хук сработает по сценарию, описанному в функции.
  //Если если в useEffect передать только ф-цию, то он будет вызываться
  //каждый раз после перерисовки компонента.
  //А если установить зависимость от props.status через массив, то хук будет вызываться
  //после перерисовки компонента только если изменился props.status.
  useEffect( () => {
    setStatus(props.status)
  }, [props.status])

  return (
    <div>
      {
        (!editMode)
          ? <div>
            <span onDoubleClick={activateEditMode}>{props.status || 'status'}</span>
          </div>
          : <div>
            <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status} />
          </div>
      }
    </div>
  )
}



export default ProfileStatusWithHooks;