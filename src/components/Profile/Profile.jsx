import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <div className={s.content}>
      <div className={s.blockHeader}>Profile</div>
      <ProfileInfo 
        isOwner={props.isOwner} 
        profile={props.profile} 
        status={props.status} 
        updateUserStatus={props.updateUserStatus} 
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
      />
      <div className={s.blockHeader}>My Posts</div>
      <MyPostsContainer />
    </div>
  )
}

export default Profile;