import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/orig' />
        <div>
          <span>{props.message}</span>
          <div>like: {props.likesCount}</div>
        </div>
    </div>
  )
}

export default Post;