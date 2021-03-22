import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY' : '3e43cc29-0135-406d-9ee4-44e9f8d7f5b1'
  }
});


export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
      return response.data;
    });
  },

  follow(userId) {
    return instance.post(`follow/${userId}`)
    .then(response => {
      return response.data;
    });
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
    .then(response => {
      return response.data;
    });
  }
}

export const authAPI = {

  me() {
    return instance.get('auth/me') 
    .then(response => {
      return response.data;
    })
    
  },

  login(email, password, rememberMe = false) {
    return instance.post('auth/login', {email, password, rememberMe})
    .then(response => {
      return response.data;
    })
  },

  logout() {
    return instance.delete('auth/login')
    .then(response => {
      return response.data;
    })
  }
}

export const profileAPI = {

  getProfile(userId) {
    return instance.get('profile/' + userId)
    .then(response => {
      return response.data;
    })
  },

  getStatus(userId) {
    return instance.get('profile/status/' + userId)
    .then(response => {
      return response.data;
    })
  },

  updateStatus(status) {
    return instance.put('profile/status/', {status})
    .then(response => {
      return response.data;
    })
  }
}