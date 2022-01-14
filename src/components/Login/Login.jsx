import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { login } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import s from '../common/FormsControls/FormsControls.module.css'


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField('Email', 'email', [required], Input)}
      {createField('Password', 'password', [required], Input, {type: 'password'})}
      {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'rememberMe')}

      {error && <div className={s.formSummaryError}>{error}</div>}
      
      {captchaUrl && <img src={captchaUrl} alt="captcha" />}
      {captchaUrl && createField('Symbols from image', 'captcha', [required], Input)}
      <div><button>Login</button></div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }
  //если isAuth true то выполняется редирект на профиль, 
  //если false то выполнение идёт дальше и показывает форму входа
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
  }
}

export default connect(mapStateToProps, {login})(Login);