import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
  return (
    <div className={s.message + ` ${props.owner ? s.owner : ''}`}>
      <span className={s.message_body}>{props.message}</span>
    </div>
  )
}

export default Message;