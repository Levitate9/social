import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
  return (
    <div>
      {
        (props.owner) 
          ? <span className={s.message + ' ' + s.owner}>{props.message}</span> 
          : <span className={s.message}>{props.message}</span> 
      }
    </div>
  )
}

export default Message;