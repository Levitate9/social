import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img className={s.main_logo} src='https://www.pngkit.com/png/full/969-9692405_jordan-logo-gray-amtrak-white-logo.png' />
      <div className={s.login_block}>
        {
          props.isAuth
            ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
            : <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
  )
}

export default Header;