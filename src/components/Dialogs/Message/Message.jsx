import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
  let date = props.date
  let time = `${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`
  return (
    <div className={s.message + ` ${props.owner ? s.owner : ''}`}>
      <div className={s.message_body}>
        <div className={s.message_text}>{props.message}</div>
        <div className={s.time}>
          <span></span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  )
}

export default Message;