import React from 'react';
import s from './NavbarFriends.module.css';

const NavbarFriends = (props) => {

  let friendsList = props.friends.map( el => 
    <div className={s.friend} key={el.id}>
      <p className={s.name}>{el.name}</p>
    </div>
  )

  return (
    <div className={s.friends_area}>
      {friendsList}
    </div>
  )
}

export default NavbarFriends;