import { authAPI, securityAPI } from "../api/api"
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'SET_USER_DATA'
const SET_CAPTCHA = 'SET_CAPTCHA'

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
};

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA:                        //для обоих кейсов одинаковые действия со стэйтом      
    case SET_CAPTCHA:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}

//экшен-криэйтеры
export const setAuthUserData = (id, email, login, isAuth) => ({ 
  type: SET_USER_DATA, payload: {id, email, login, isAuth} 
})
export const setCaptchaUrl = (captchaUrl) => ({ type: SET_CAPTCHA, payload: {captchaUrl} })

//санк-криэйтеры
export const getAuthUserData = () => async (dispatch) => {
  const response = await authAPI.me()

  if (response.resultCode === 0) {
    const { id, email, login } = response.data
    dispatch(setAuthUserData(id, email, login, true))
  }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe, captcha)
  if (response.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    if (response.resultCode === 10) {
      dispatch(getCaptchaUrl())
    }
    const message = response.messages.length > 0 ? response.messages[0] : 'Some error'
    dispatch(stopSubmit('login', { _error: message }))
  } 
}

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout()

  if (response.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.data.url
  dispatch(setCaptchaUrl(captchaUrl))
}

export default authReducer;