import React from 'react'
import s from './ProfileInfo.module.css'
import { useForm } from 'react-hook-form'


const ProfileDataForm = ({ onSubmit, profile }) => {
  const preloadValues = {
    fullName: profile.fullName,
    lookingForAJob: profile.lookingForAJob,
    lookingForAJobDescription: profile.lookingForAJobDescription,
    aboutMe: profile.aboutMe,
    contacts: profile.contacts
  }

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: preloadValues
  })

  return <form onSubmit={handleSubmit(onSubmit)}>
    <div className={s.fullNameForm}>
      <b>Full name</b>
      <input {...register('fullName', { required: true })} placeholder='Full name' className={s.form_input} />
      {errors.fullName && <div className={s.error}>This field is required</div>}
    </div>
    <div className={s.lookingForAJobForm}>
      <label><input {...register('lookingForAJob')} type='checkbox' />looking for a job</label>
    </div>
    <div className={s.skillsForm}>
      <b>My professional skills</b>:
      <textarea {...register('lookingForAJobDescription')} placeholder='My skills' className={s.form_textarea} />
    </div>
    <div className={s.aboutMeForm}>
      <b>About me</b>:
      <textarea {...register('aboutMe')} placeholder='About me description' className={s.form_textarea} />
    </div>
    <div className={s.contactsForm}>
      <b>Contacts</b>:
      <table>
        <tbody>
          {Object.keys(profile.contacts).map(key => {
            return <tr key={key}>
              <td>{key}:</td><td><input {...register('contacts.' + key)} placeholder={key} className={s.form_input} /></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
    <div className={s.button} type='submit'><button>Save</button></div>
  </form>
}

export default ProfileDataForm