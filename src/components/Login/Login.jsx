import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { ElementConstructor} from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { login } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import s from '../common/FormsControls/FormsControls.module.css'

const Input = ElementConstructor('input')
const maxLength20 = maxLengthCreator(20)

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Email'} component={Input} name={'email'} 
          validate={[ required, maxLength20 ]} />
      </div>
      <div>
        <Field placeholder={'Password'} component={Input} name={'password'} type={'password'}
          validate={[ required, maxLength20 ]} />
      </div>
      <div>
        <Field type={'checkbox'} component={Input} name={'remember me'} />Remember me
      </div>
      { props.error && <span className={s.formSummaryError}>
          {props.error}
        </span>
      }   
      <div>
        <button>Log In</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }
  //если isAuth true то выполняется редирект на профиль, 
  //если folse то выполнение идёт дальше и показывает форму входа
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {login})(Login);