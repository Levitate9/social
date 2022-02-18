import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom'
import Paginator from '../common/Paginator/Paginator'

const Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {

  return (
    <div className={s.wrap}>
      <div className={s.pagination}>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
          totalItemsCount={totalUsersCount} pageSize={pageSize}
        />
      </div>
      <div className={s.users_area}>
        {
          users.map(u => <div key={u.id} className={s.user}>
            <span className={s.content_area}>
              <NavLink to={'/profile/' + u.id} >
                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='user' className={s.userPhoto} />
              </NavLink>
              <div className={s.follow_button}>
                {
                  (u.followed)
                    ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                      onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === u.id)}
                      onClick={() => { props.follow(u.id) }}>Follow</button>
                }
              </div>
              <div className={s.user_name}>{u.name}</div>
            </span>
          </div>)
        }
      </div>
    </div>
  )
}

export default Users