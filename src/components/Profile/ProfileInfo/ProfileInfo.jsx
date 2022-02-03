import React, { useState } from 'react'
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
import userPhoto from "../../../assets/images/user.png"
import ProfileDataForm from './ProfileDataForm'


const ProfileInfo = ({ profile, status, updateUserStatus, isOwner, savePhoto, saveProfile }) => {
  console.log(profile)
  let [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }
 
  const onSubmit = (formData) => {
    saveProfile(formData).then(
      () => {
        setEditMode(false)
      }
    )
  }
 
  return (
    <div className={s.description}>
      <div className={s.imageArea}>
        <img src={profile.photos.large || userPhoto} className={s.mainPhoto} alt="profile avatar" />
        <div>
          {isOwner && editMode && <input type={"file"} onChange={onMainPhotoSelected} />}
        </div>
      </div>
      <div className={s.profileDataArea}>
        {editMode
          ? <ProfileDataForm 
              profile={profile} 
              onSubmit={onSubmit}
            />
          : <ProfileData
              goToEditMode={() => { setEditMode(true) }}
              profile={profile}
              isOwner={isOwner}
              status={status}
              updateStatus={updateUserStatus}
            />}
      </div>
    </div>
  )
}

const ProfileData = ({ profile, isOwner, goToEditMode, status, updateStatus }) => {
  return <div className={s.profileData}>
    <div className={s.fullName}>
      {profile.fullName}
    </div>
    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    <div className={s.lookingForAJob}>
      <b>Looking for a job</b>: {profile.lookingForAJob
        ? <span className={s.yes}>yes</span>
        : <span className={s.no}>no</span>}
    </div>
    <div className={s.aboutMe}>
      <b>About me</b>: {profile.aboutMe}
    </div>
    <div className={s.skills}>
      <b>My professional skills</b>: {profile.lookingForAJobDescription}
    </div>
    <div className={s.contacts}>
      {Object.keys(profile.contacts).map( key => {
        if (profile.contacts[key]) {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        }
        return null
      })}
    </div>
    {isOwner && <div className={s.button}><button onClick={goToEditMode}>edit</button></div>}
  </div>
}

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <a href={contactValue}>
      <span className={s[contactTitle]}></span>
    </a>
  )
}

export default ProfileInfo