import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY' : '0f6e9cec-bd46-4811-872f-0d6693e7dbd7'
  }
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
      return response.data
    })
  },

  follow(userId) {
    return instance.post(`follow/${userId}`)
    .then(response => {
      return response.data
    })
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
    .then(response => {
      return response.data
    })
  }
}

export const authAPI = {
  me() {
    return instance.get('auth/me') 
    .then(response => {
      return response.data
    })
    
  },

  login(email, password, rememberMe = false, captcha = null) {
    return instance.post('auth/login', {email, password, rememberMe, captcha})
    .then(response => {
      return response.data
    })
  },

  logout() {
    return instance.delete('auth/login')
    .then(response => {
      return response.data
    })
  }
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get('profile/' + userId)
    .then(response => {
      return response.data
    })
  },

  getStatus(userId) {
    return instance.get('profile/status/' + userId)
    .then(response => {
      return response.data
    })
  },

  updateStatus(status) {
    return instance.put('profile/status', {status})
    .then(response => {
      return response.data
    })
  },

  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile)

    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      return response.data
    })
  },

  saveProfile(profile) {
    return instance.put(`profile`, profile)
    .then(response => {
      return response.data
    })
  }
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get('security/get-captcha-url')
  }
}