import React from 'react';
import s from './Post.module.css';
import heart from '../../../../assets/images/heart.png';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={props.profilePhoto} alt='profile' />
      <div className={s.message}>
        <div>{props.message}</div>
        <div>
          <img src={heart} alt='like' />
          <span>{props.likesCount}</span>
        </div>
      </div>
    </div>
  )
}

export default Post;