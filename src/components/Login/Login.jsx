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
      <form onSubmit={handleSubmit(onSubmit)} className={s.login_form}>
        <input {...register('email', { required: true })} type='email' placeholder='Email' />
        {errors.email && <span className={s.error}>email is required</span>}
        <input {...register('password', { required: true })} type='password' placeholder='Password' />
        {errors.password && <span className={s.error}>password is required</span>}
        <label><input {...register('rememberMe')} type='checkbox' /> remember me</label>

        <div className={s.img_captcha}>{props.captchaUrl && <img src={props.captchaUrl} alt='captcha' />}</div>
        <div className={s.captcha_input}>
          {props.captchaUrl && <input {...register('captcha', { required: true })} placeholder='Symbols from image' />}
        </div>

        <button type='submit'>login</button>
      </form>
    )
  }

  return (
    <div className={s.login_wrap}>
      <div className={s.login_area}>
        <h3 className={s.login_header}>Login</h3>
        <div className={s.login_form_wrap}>
          <LoginForm login={props.login} captchaUrl={props.captchaUrl} />
        </div>
      </div>
      <div className={s.free_access_container}>
        <div className={s.free_access_wrap}>
          <div className={s.keys}><b>Email: </b><b>Pass: </b></div>
          <div className={s.values}><span>shigeto.df@gmail.com</span><span>free</span></div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
  }
}

export default connect(mapStateToProps, { login })(Login)