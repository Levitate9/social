import React, { useState, useEffect } from 'react'
import s from './ProfileInfo.module.css'

const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div className={s.status}>
      {!editMode &&
        <span onDoubleClick={activateEditMode}>{props.status || "-------"}
          <span className={s.tooltip}>double click to edit</span>
        </span>
      }
      {editMode &&
        <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
      }
    </div>
  )
}


export default ProfileStatus