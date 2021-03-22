import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';

const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

  return (
    <div className={s.wrap}>
      <div className={s.pagination}>
      <Paginator currentPage={currentPage} onPageChanged={onPageChanged} 
        totalItemsCount={totalUsersCount} pageSize={pageSize} 
      />
      </div>
      {
        users.map(u => <div key={u.id} className={s.user}>
          <span>
            <div className={s.ava}>
              <NavLink to={'/profile/' + u.id} >
                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} />
              </NavLink>
            </div>
            <div>
              {
                (u.followed)
                  ? <button disabled={ props.followingInProgress.some(id => id === u.id) } 
                  onClick={ () => { props.unfollow(u.id) }}>Unfollow</button>
                  : <button disabled={ props.followingInProgress.some(id => id === u.id) } 
                  onClick={ () => { props.follow(u.id) }}>Follow</button>
              }
            </div>
          </span>
          <span>
            <div>{u.name}</div>
            <div>{u.status || 'none'}</div>
          </span>
        </div>)
      }
    </div>
  )
}

export default Users;