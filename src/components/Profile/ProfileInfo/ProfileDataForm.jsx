import React from 'react';
import s from './ProfileInfo.module.css';
import { createField, Input, Textarea } from "../../common/FormsControls/FormsControls";
import { reduxForm } from 'redux-form';
import style from "../../common/FormsControls/FormsControls.module.css";


const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return <form onSubmit={handleSubmit}>
    {error && <div className={style.formSummaryError}>
      {error}
    </div>
    }
    <div className={s.fullNameForm}>
      <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
    </div>
    <div className={s.lookingForAJobForm}>
      <b>Looking for a job</b>:
      <div>
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
    </div>
    <div className={s.skillsForm}>
      <b>My professional skills</b>:
      {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
    </div>
    <div className={s.aboutMeForm}>
      <b>About me</b>:
      {createField("About me", "aboutMe", [], Textarea)}
    </div>
    <div className={s.contactsForm}>
      <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
        return <div key={key} className={s.contact}>
          <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
        </div>
      })}
    </div>
    <div className={s.button}><button>save</button></div>
  </form>
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm;