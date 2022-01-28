import React from 'react'
import { login } from '../../redux/auth-reducer'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import s from './Login.module.css'


const Login = (props) => {
  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  const LoginForm = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (formData) => {
      props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div><input {...register('email', {required: true})} type='email' placeholder='Email' /></div>
        {errors.email && <span className={s.error}>email is required</span>}
        <div><input {...register('password', {required: true})} type='password' placeholder='Password' /></div>
        {errors.password && <span className={s.error}>password is required</span>}
        <label><input {...register('rememberMe')} type='checkbox' /> remember me</label>

        <div>{props.captchaUrl && <img src={props.captchaUrl} alt='captcha' />}</div>
        <div>
          {props.captchaUrl && <input {...register('captcha', {required: true})} placeholder='Symbols from image' />}
        </div>
        <button type='submit'>Log in</button>
      </form>
    )
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginForm login={props.login} captchaUrl={props.captchaUrl} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
  }
}

export default connect(mapStateToProps, {login})(Login)