import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      {/* <div>
        <img className={s.profile_img} src='https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9' />
      </div> */}
      <div className={s.description}>
        <img src={props.profile.photos.large} />
        <div>{props.profile.aboutMe}</div>
        <div>{props.profile.lookingForAJobDescription}</div>
      </div>
      <div>
        <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} />
      </div>
    </div>
  )
}

export default ProfileInfo;