import React from 'react'
import s from './ProfileInfo.module.css'
import { useForm } from 'react-hook-form'


const ProfileDataForm = ({ onSubmit, profile }) => {
  const preloadValues = {
    fullName: profile.fullName,
    lookingForAJob: profile.lookingForAJob,
    aboutMe: profile.aboutMe,
    lookingForAJobDescription: profile.lookingForAJobDescription,
    contacts: profile.contacts
  }

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: preloadValues
  })

  return <form onSubmit={handleSubmit(onSubmit)}>
    <div className={s.fullNameForm}>
      <b>Full name</b>
      <div><input {...register('fullName', { required: true })} placeholder='Full name' /></div>
      {errors.fullName && <div className={s.error}>This field is required</div>}
    </div>
    <div className={s.lookingForAJobForm}>
      <label><input {...register('lookingForAJob')} type='checkbox' />looking for a job</label>
    </div>
    <div className={s.skillsForm}>
      <b>My professional skills</b>:
      <div><textarea {...register('lookingForAJobDescription')} placeholder='My professional skills' /></div>
    </div>
    <div className={s.aboutMeForm}>
      <b>About me</b>:
      <div><textarea {...register('aboutMe')} placeholder='About me description' /></div>
    </div>
    <div className={s.contactsForm}>
      <b>Contacts</b>:
      <table>
        <tbody>
          {Object.keys(profile.contacts).map(key => {
            return <tr key={key}>
              <td>{key}:</td><td><input {...register('contacts.' + key)} placeholder={key} /></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
    <div className={s.button} type='submit'><button>save</button></div>
  </form>
}

export default ProfileDataForm